const IBaseDao = require('servercore/dao/i-base-dao');

const ModuleEntity = require('../entities/module-entity');

const {postGres} = require('servercore/postgres/postgresPipe');
const ModuleEntity = require('../entities/module-entity');
const ImageEntity = require('module/image/entities/image-entity');
const ModuleEntity = require('../entities/module-entity');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS module (
        id INT GENERATED ALWAYS AS IDENTITY,
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
     * Search and return the image with the corresponding id.
     * @param {number} id - The id of the image. 
     */
    async select(id){
        return this._populateModule(await this.baseSelect(id));
    }


    /** TODO might delete this (how can we add a module without any programming ?)
     * Add a image to the database and return it with it new id.
     * @param {ModuleEntity} module - The image to add.
     */
    async commit(module){
        return this._populateModule(await this.baseCommit(this._clearModule(module)));
    }

    /**
     * Modify a module to the database.
     * @param {ImageEntity} module 
     */
    async modify(module){
        return this._populateModule(await this.baseModify(this._clearModule(module)));
    }


    /** TODO might delete this (why would we delete a module ?)
     * @description Delete a module to the database.
     * @param {ModuleEntity} module 
     */
    async delete(module){

        return this._populateModule(await this.baseDelete(this._clearModule(module)));
    }

    /**
     * @private
     * @description Prepare the entity for the db query
     * @param {ModuleEntity} module 
     */
    prepare(module){
        module.logo = module.logo.id;
        return module;
    }

    /**
     * @private
     * @description Populate back the entity and fill any 'foreign' entity with their respective id
     * @param {*} result 
     */
    _populateModule(result){
        let module = new ModuleEntity(result.rows[0]);
        module.logo = new ImageEntity({id: result.rows[0].logo});
        
        return module;
    }

}

module.exports = ModuleDao; 