// This file exists to facilitate the create table / update table for this module.
const ImageDao = require('./dao/image-dao');
const ImageFormatDao = require('./dao/image-format-dao');



module.exports = {
    imageDao: ImageDao,
    imageFormatDao: ImageFormatDao
};