const IBaseDao = require('servercore/dao/i-base-dao');

const ResolutionEntity = require('../entities/resolution-entity');

const {postGres} = require('servercore/postgres/postgresPipe');
const PostgresQueryEntity = require('servercore/entities/postgres-query-entity');

const name = 'resolution';
// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS ${name} (
        id INT GENERATED ALWAYS AS IDENTITY,
        height INT,
        width INT
    )`
);

class ResolutionDao extends IBaseDao{
    
    _buildEntity(result){
        return new ResolutionEntity(commitResult.rows[0]); 
    }

}

module.exports = ResolutionDao; 