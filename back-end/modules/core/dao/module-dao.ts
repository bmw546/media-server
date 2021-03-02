const JsUtil = require('back-end/modules/core/util/js-util');

import {IBaseDao} from "./i-base-dao";

const ModuleEntity = require('../entities/module-entity');

const {postGres} = require('back-end/modules/core/postgres/postgresPipe');

const ImageEntity = require('back-end/modules/image/entities/image-entity');

// WHY outside of the class ? So we can add the sql to generate it table. 
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

export class ModuleDao extends IBaseDao{

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