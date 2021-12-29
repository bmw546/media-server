/**
 * This is a little class to facilitate the use of postgres with some simple function that 
 * help to execute queries.
 */

import {PostGresError} from '../errors/post-gres-error';

// postgres
// postgres info to start it--> https://stackoverflow.com/questions/4482239/postgresql-database-service
import { Client } from 'ts-postgres';

const dbConfigs = import('./post-gres-config');

const PostgresQueryEntity = import('../entities/postgres-query-entity');


import { Pool } from 'pg';
const pool = new Pool(dbConfigs);
//const pool = new Pool(dbConfigs);


// TODO make all of this on some special log thingy ! (so we can filter them better in the futur !)

// src for the pool.on ... : https://node-postgres.com/api/pool
pool.on('connect', client => {
    console.log('pool has connected !')
});

pool.end(() => {
    console.log('pool has ended')
});

pool.on('error', (err: Error, client: Client) => {
    console.log('an error as occured to postgres client: ' + Error);
});

pool.on('remove', client => {
    console.log('an client has been removed !')
});

// why pool ?
// https://stackoverflow.com/questions/48751505/how-can-i-choose-between-client-or-pool-for-node-postgres

class PostGres{

    
    //@see : https://node-postgres.com/
    // use transaction ?

    constructor(){
    }

    // -------------------- 'NORMAL QUERY' ----------------------- //
    /**
     * @description Used for straight forward (without transaction) e.g: Create table ;
     * 
     * @param {PostgresQueryEntity} query - The query and its parameter to execute
     */
    async executeQuery(query){
        let res;

        // TODO make all of this .log some special log thingy ! (so we can filter them better in the futur !)
        try{
            
            console.log('============= executing the following query =============');
            console.log(JSON.stringify(query, null, 2));
            console.log('========================');

            res = await pool.query(query.command, query.parameters);
            console.log('query executed successfully !');
        }catch(e){
            // TODO add some error handling
            console.log(e);
            throw new PostGresError(query);
        }
        
        // Print the result thingy
        console.log('============= executing the following query =============');
        console.log(JSON.stringify(res, null, 2));
        console.log('========================');

        return res; 
    }

    async shutdownPool(){
        await pool.end();
    }

    // ================ Pool properties ===========================
    totalCount(): number {return pool.totalCount();}
    idleCount(): number {return pool.idleCount();}
    waitingCount(): number {return pool.waitingCount();}
}
export = PostGres;