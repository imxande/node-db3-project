// importing db
const db = require('../data/db-config.js');

// export functions that i will us in the router
module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

// this function gets all the schemes
function find(){
    return db('schemes');
}

// method to get schemes by specific id
function findById(id){
    return db('schemes')
        .where({id})
        .first()
}

// Translates to SELECT schemes.scheme_name, steps.id,
// steps.instructions,
// steps.step_number
// FROM schemes 
// JOIN steps ON steps.scheme_id = schemes.id
// WHERE scheme_id = 5
function findSteps(id){
    return db('steps as s')
        .select('s.id','e.scheme_name', 's.step_number', 's.instructions')
        .join('schemes as e', 'e.id', 's.scheme_id' )
        .where({scheme_id:id})
}

// method to add new scheme
function add(scheme){
    return db('schemes')
    .insert(scheme, 'id')
    .then(ids => ({ id: ids[0] }));
}

// method to update scheme
function update(changes, id){
    return db('schemes')
        .where({ id })
        .update(changes)
}

// method to remove scheme
function remove(id){
    return db('schemes')
        .where({ id })
        .del()
}