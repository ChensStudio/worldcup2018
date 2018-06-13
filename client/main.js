import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './templates/views/games.js'
import './templates/views/teams.js'

global.Buffer = global.Buffer || require("buffer").Buffer;

//https://www.moacwalletonline.com/main

if(typeof chain3 !== 'undefined')
  chain3 = new Chain3(chain3.currentProvider);
else
  chain3 = new Chain3(new Chain3.providers.HttpProvider("https://www.moacwalletonline.com/test"));	

//Reload._onMigrate(function() {
//  return [false];
//});
