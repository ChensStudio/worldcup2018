import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './templates/views/games.js'

global.Buffer = global.Buffer || require("buffer").Buffer;

if(typeof chain3 !== 'undefined')
  chain3 = new Chain3(chain3.currentProvider);
else
  chain3 = new Chain3(new Chain3.providers.HttpProvider("http://localhost:8545"));	

//Reload._onMigrate(function() {
//  return [false];
//});
