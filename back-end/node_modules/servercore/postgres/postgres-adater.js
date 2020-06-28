/**
 * This is a little class to facilitate the use of postgres.
 */

const { Client } = require('pg')
const client = new Client();
class postgress{

    /** @private */
    async executeQuery(query){
        await client.connect();
        res = await client.query(query);
        await client.end();
        return res; 
    }
    //@see : https://node-postgres.com/
    // use transaction ?
}