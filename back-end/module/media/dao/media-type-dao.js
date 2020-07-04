const IBaseDao = require('servercore/dao/i-base-dao');

const MediaTypeEntities = require('../entities/media-type-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Mayby ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS mediaType (
        id INT GENERATED ALWAYS AS IDENTITY,
        name STRING,
    )`
);

// Populate the table with base info
postGres.addCreateTable(
    `INSERT INTO mediaType (name) VALUES ('video', 'image', 'audio', 'movies')`
);