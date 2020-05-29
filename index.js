// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
let loc=require('./lib/locales')
var faker = new Faker({ locales: loc});
//console.log(loc);
module['exports'] = faker;