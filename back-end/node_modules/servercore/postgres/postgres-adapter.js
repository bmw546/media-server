/**
 * This is a little class to facilitate the use of postgres.
 */

// postgres
// postgres info --> https://stackoverflow.com/questions/4482239/postgresql-database-service
const { Client, Pool } = require('pg');

const dbConfigs = require('./post-gres-config');

const client = new Client(dbConfigs);
const pool = new Pool(dbConfigs);

class PostGres{

    
    //@see : https://node-postgres.com/
    // use transaction ?

    // -------------------- 'NORMAL QUERY' ----------------------- //
    /**
     * @description Used for straight forward (without transaction) e.g: Create table ;
     */
    async executeQuery(query, value){
        let res;
        await client.connect();

        try{
            res = await client.query(query, value);
        }catch(e){
            // TODO add some error handling
            throw e;
        } finally{
            await client.end();
        }
        
        return res; 
    }
    // -------------------- Transaction -------------------------- //
    /**
     * @private
     * @description Execute a transaction query. Roll back if it collide with another client. 
     * @see https://node-postgres.com/features/transactions
     * @param {*} query The query to execute.
     * @param {*} values The query to execute. 
     */
    async executeTransactionQuery(query, values){
        // If the connection fail it will throw and we won't need to dispose the transactionClient.
        const transactionClient = await pool.connect();

        let res;
        
        try{
            await transactionClient.query('BEGIN');

            res = await transactionClient.query(query, values);

            await transactionClient.query('COMMIT');

        } catch(e) {
            // Transaction fail rollback
            await transactionClient.query('ROLLBACK'); 
            throw e;

        } finally {
            transactionClient.release();
        }
        return res
    }
}

module.exports = PostGres;