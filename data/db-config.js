// import knex
const knex = require('knex');

// import knex configuration 
const knexConfig = require('../knexfile.js');

// this is like exporting the db
module.exports = knex(knexConfig.development)