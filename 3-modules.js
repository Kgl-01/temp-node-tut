//Common JS, every file is module(by default)
//Modules : Encapsulated code(Only share minimum)
const names = require('./4-names')
//const {amma,sodari} = require('......')
//we can also deconstruct it this way.
console.log(names);
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
sayHi('Karthik')
//we know that the variables are defined in the names. We just have to insert it in this way
sayHi(names.amma);
sayHi(names.sodari);