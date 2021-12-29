import PostGres = require("./postgres-adapter")

/** @property {postGres} PostGres */
export = {
    postGres: new PostGres(),
}