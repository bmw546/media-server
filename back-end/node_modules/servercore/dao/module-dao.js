const IBaseDao = require('servercore/dao/i-base-dao');

const ModuleEntity = require('../entities/module-entity');

const {postGres} = require('servercore/postgres/postgresPipe');

const ImageEntity = require('module/image/entities/image-entity');

// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS module (
        id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title STRING,
        description STRING,
        logo INT
    )`
);

// And then let modify it so we can add the fk key
postGres.addModifyTable(
    `ALTER TABLE module ADD CONSTRAINT fk_logo FOREIGN KEY (logo) REFERENCES image (id) ON UPDATE CASCADE ON DELETE SET NULL`
);

class ModuleDao extends IBaseDao{
    
    /**
     * @private
     * @description Prepare the entity for the db query
     * @param {ModuleEntity} module 
     */
    _prepare(module){
        module.logo = module.logo.id;
        return module;
    }

    /**
     * @private
     * @description Populate back the entity and fill any 'foreign' entity with their respective id
     * @param {*} result 
     */
    _buildEntity(result){
        let module = new ModuleEntity(result);
        module.logo = new ImageEntity({id: result.logo});
        
        return module;
    }

}

module.exports = ModuleDao; 