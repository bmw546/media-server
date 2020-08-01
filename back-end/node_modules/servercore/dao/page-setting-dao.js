const IBaseDao = require('servercore/dao/i-base-dao');

const PageSettingEntity = require('../entities/page-setting-entity');

const UserEntity = require('module/user/entities/user-entity');

const ModuleEntity = require('../entities/module-entity');

const ImageEntity = require('module/image/entities/image-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS pageSetting (
        id serial primary key,
        styleName VARCHAR(100),
        foreground TEXT,
        background TEXT,
        text TEXT,
        button TEXT,
        creator INT,
        options TEXT,
        backgroundImage INT,
        module INT
    )`
);

// And then let modify it so we can add the fk key
postGres.addModifyTable(
    `ALTER TABLE pageSetting 
        ADD CONSTRAINT fk_creator FOREIGN KEY (creator) REFERENCES user (id)  ON UPDATE CASCADE ON DELETE SET NULL,
        ADD CONSTRAINT fk_backgroundImage FOREIGN KEY (backgroundImage) REFERENCES image (id) ON UPDATE CASCADE ON DELETE SET NULL,
        ADD CONSTRAINT fk_module FOREIGN KEY (module) REFERENCES module (id) ON UPDATE CASCADE ON DELETE CASCADE,
    `
);

class PageSettingDao extends IBaseDao{

    /**
     * @description Change the other entity to their id so we can insert it into the data store.
     * @param {PageSettingEntity} pageSetting 
     */
    _prepare(pageSetting){
        
        pageSetting.creator = creator.id;
        
        pageSetting.backgroundImage = pageSetting.backgroundImage.id;

        pageSetting.module = pageSetting.module.id;

    }

    /**
     * @description Convert the result from the dataStore to an entity
     * @param {*} result 
     */
    _buildEntity(result){
        let pageSetting = new PageSettingEntity(result);

        pageSetting.creator = new UserEntity({id: result.module});

        pageSetting.backgroundImage = new ImageEntity({id: result.backgroundImage});

        pageSetting.module = new ModuleEntity({id: result.module});

        return pageSetting;
    }
}

module.exports = PageSettingDao; 