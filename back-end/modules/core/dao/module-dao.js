const JsUtil = require('servercore/util/js-util');

const IBaseDao = require('servercore/dao/i-base-dao');

const ModuleEntity = require('../entities/module-entity');

const {postGres} = require('servercore/postgres/postgresPipe');

const ImageEntity = require('module/image/entities/image-entity');

/** @description The name of this dao table */
const name = "module";

// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS ${name} (
        id serial primary key,
        title VARCHAR(100),
        description TEXT,
        logo INT
    )`
);

// And then let modify it so we can add the fk key
postGres.addModifyTable(
    `ALTER TABLE ${name} ADD CONSTRAINT fk_logo FOREIGN KEY (logo) REFERENCES image (id) ON UPDATE CASCADE ON DELETE SET NULL`
);

class ModuleDao extends IBaseDao{
    constructor(){
        super();
        this.name = name;
    }
    
    /**
     * @private
     * @description Prepare the entity for the db query
     * @param {ModuleEntity} module 
     */
    _prepare(module){

        if(!JsUtil.isNil(module.logo)){
            module.logo = module.logo.id;
        }
        
        return module;
    }

    /**
     * @private
     * @description Populate back the entity and fill any 'foreign' entity with their respective id
     * @param {*} result 
     */
    _buildEntity(result){
        let module = new ModuleEntity(result);

        if(!JsUtil.isNil(result)){
            module.logo = new ImageEntity({id: result.logo});
        }

        return module;
    }

}

module.exports = ModuleDao; 