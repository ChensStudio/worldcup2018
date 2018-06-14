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
  chain3 = new Chain3(new Chain3.providers.HttpProvider("https://cryptoxy.us/node"));	

Reload._onMigrate(function() {
 return [false];
});

contractAddress = "0x8671eb9f82218199e5ce0acab2d31b2e5e281491";
contractAbi = [{"constant":true,"inputs":[],"name":"tokenRatio","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contributorsTopBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gTotalContribution","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"SafetySendout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"haltFlag","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"teamNumber","type":"uint256"}],"name":"SetChampion","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contributorsAccountBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"teams","outputs":[{"name":"teamNumber","type":"uint256"},{"name":"teamName","type":"string"},{"name":"totalContributions","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"contributor","type":"address"}],"name":"AddContributor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"teamNumber","type":"uint256"},{"name":"teamName","type":"string"}],"name":"AddTeam","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"matches","outputs":[{"name":"matchNumber","type":"uint256"},{"name":"homeTeamNumber","type":"uint256"},{"name":"awayTeamNumber","type":"uint256"},{"name":"startTime","type":"uint256"},{"name":"homeScore","type":"uint256"},{"name":"awayScore","type":"uint256"},{"name":"finished","type":"bool"},{"name":"rewardSent","type":"bool"},{"name":"jackpot","type":"uint256"},{"name":"totalHomeWinContributions","type":"uint256"},{"name":"totalAwayWinContributions","type":"uint256"},{"name":"totalDrawContributions","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"founder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contributionUpperBound","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"championRewardSent","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contributionLowerBound","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"matchesContributions","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contributorsEarlyBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"matchNumber","type":"uint256"},{"name":"homeScore","type":"uint256"},{"name":"awayScore","type":"uint256"}],"name":"FinalizeMatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenSymbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allWinnersMap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"matchNumber","type":"uint256"}],"name":"SendoutSingleMatchReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"SendoutTopBonus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"winner","type":"address"}],"name":"AddWinAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"teamsContributionsSent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"earlyBonusLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"matchesContributionsSent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allContributorsMap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"SendoutChampionReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newFounder","type":"address"}],"name":"SetFounder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"to","type":"address"}],"name":"ManualTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"championJackpot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"halt","type":"bool"}],"name":"SetHalt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"toShaRatio","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"matchNumber","type":"uint256"},{"name":"homeTeamNumber","type":"uint256"},{"name":"awayTeamNumber","type":"uint256"},{"name":"startTime","type":"uint256"}],"name":"AddMatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allWinners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"matchNumber","type":"uint256"},{"name":"result","type":"uint256"}],"name":"SingleMatchBet","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allContributors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"topBonusLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"unitEarlyBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"teamsContributions","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accountBonusLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"unitAccountBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"teamNumber","type":"uint256"}],"name":"ChampionBet","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}];
contractInstance = null;

Template.worldcup.helpers({
    'getTotalAward': function() {

        if (!contractInstance && (typeof chain3 !== 'undefined')) {
            contractInstance = chain3.mc.contract(contractAbi).at(contractAddress);
        }

        if (contractInstance) {
	        var totalAward = contractInstance.gTotalContribution()/1000000000000000000;

	        console.log("totalAward", totalAward);
	        return Math.floor(totalAward + 0.5)+ ' WCT';
        } else {
        	return "";
        }
    },    
    'isMicroMessage': function () {
        var ua = window.navigator.userAgent.toLowerCase();
        console.log(ua);
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }
        else {
            return false;
        }
    },
    'isAndroid': function () {
        var ua = window.navigator.userAgent.toLowerCase();
        console.log(ua);
        if(ua.match(/android/i) == 'android'){
            return true;
        }
        else {
            return false;
        }
    },
    'isApple': function () {
        var ua = window.navigator.userAgent.toLowerCase();
        console.log(ua);
        if(ua.match(/iphone/i) == 'iphone'){
            return true;
        }
        else {
            return false;
        }
    }

});
