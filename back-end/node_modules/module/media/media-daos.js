// This file exists to facilitate the create table / update table for this module.
const MediaDao = require('./dao/media-dao');
const MediaTypeDao = require('./dao/media-type-dao');
const TagsDao = require('./dao/tags-dao');



module.exports = {
    imageDao: ImageDao,
    imageFormatDao: ImageFormatDao
};