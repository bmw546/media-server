/**
 * This is a little class to facilitate the use of postgres.
 */

// postgres
// postgres info --> https://stackoverflow.com/questions/4482239/postgresql-database-service
const { Client, Pool } = require('pg');

const dbConfigs = require('./post-gres-config');

const PostgresQueryEntity = require('../entities/postgres-query-entity');

const pool = new Pool(dbConfigs);

class PostGres{

    
    //@see : https://node-postgres.com/
    // use transaction ?

    constructor(){
        /**@description A list of function to execute to create table */
        this.tableToCreate = [];

        /**@description A list of function to execute to create the foreign key*/
        this.tableToModify = [];
    }
    // -------------------- 'NORMAL QUERY' ----------------------- //
    /**
     * @description Used for straight forward (without transaction) e.g: Create table ;
     * 
     * @param {PostgresQueryEntity} query - The query and its parameter to execute
     */
    async executeQuery(query){
        let res;

        try{
            res = await pool.query(query.command, query.parameters);
        }catch(e){
            // TODO add some error handling
            throw e;
        }
        
        return res; 
    }
    // -------------------- Transaction -------------------------- //
    /**
     * @private
     * @description Execute a transaction query. Roll back if it collide with another client. 
     * @see https://node-postgres.com/features/transactions
     * @param {PostgresQueryEntity} query - The query and its parameter to execute
     */
    async executeTransactionQuery(query){
        // If the connection fail it will throw and we won't need to dispose the transactionClient.
        const transactionClient = await pool.connect();

        let res;
        
        try{
            await transactionClient.query('BEGIN');

            res = await transactionClient.query(query.command, query.parameters);

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


    async shutdownPool(){
        await pool.end();
    }
    // ----------------- Table Create and Modify -------------------
    /**
     * @description add a create table query to the list to execute later. 
     * @param {PostgresQueryEntity} query - The query and its parameter to execute.
     * */
    addCreateTable(query){
        this.tableToCreate.push(query);
    }

    /**
     * @description add a modify table query to the list to execute later. 
     * @param {PostgresQueryEntity} query - The query and its parameter to execute.
     */
    addModifyTable(query){
        this.tableToModify.push(query);
    }

    /**@description Will execute every create table  and modify table query. */
    async executeTableQueries(){

        // Might be not super useful to work on a better way to build the db since it will be only one time.
        
        // We might not be able to use Promise.all() instead since:
        // https://stackoverflow.com/questions/40034119/promises-inside-for-loops-promise-all-using-psql-pg-promise-in-node
        for(let createTable of this.tableToCreate){
            await this.executeQuery(createTable);
        }

        for(let modifyTable of this.tableToModify){
            await this.executeTransactionQuery(modifyTable);
        }
    }
}

module.exports = PostGres;