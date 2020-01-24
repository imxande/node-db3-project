// importing db
const db = require('../data/db-config.js');

// export functions that i will us in the router
module.exports = {
    find,
    // findById,
    // findSteps,
    // add,
    // update,
    // remove
};

// this function gets all the schemes
function find(){
    return db('schemes');
}
