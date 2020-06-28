/**
 * This is a little class to facilitate the use of postgres.
 */

// postgres
// postgres info --> https://stackoverflow.com/questions/4482239/postgresql-database-service
const { Client, Pool } = require('pg');

const dbConfigs = require('./post-gres-config');

const client = new Client(dbConfigs);
const pool = new Pool(dbConfigs);

/** Check if the db exist if not create it. */
try{
    client.query('`SELECT EXISTS(SELECT datname FROM pg_catalog.pg_database WHERE datname = $1);`', [dbConfigs.database]);
    client.none('CREATE DATABASE $1:name', [dbConfigs.database]);
} catch (e){
    throw e;
}
class PostGres{

    /** @private
     * @description Used for straight forward (without transaction);
     */
    async executeQuery(query){
        await client.connect();
        let res = await client.query(query);
        await client.end();
        return res; 
    }
    //@see : https://node-postgres.com/
    // use transaction ?


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

        try{
            await transactionClient.query('BEGIN');

            await transactionClient.query(query);

            await transactionClient.query('COMMIT');

        } catch(e) {
            // Transaction fail rollback
            await transactionClient.query('ROLLBACK'); 
            throw e;

        } finally {
            transactionClient.release();
        }
    }
}

module.exports = PostGres;