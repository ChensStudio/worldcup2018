import {Template} from 'meteor/templating';
import './teams.html';

var myContract;

Template.teambody.helpers({
    teams:[
        {
            TeamNumber: "11"
            ,Team: "team.Russia.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Russia.Flag"
        }
        ,{
            TeamNumber: "12"
            ,Team: "team.Saudi Arabia.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Saudi Arabia.Flag"
        }
        ,{
            TeamNumber: "13"
            ,Team: "team.Egypt.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Egypt.Flag"
        }
        ,{
            TeamNumber: "14"
            ,Team: "team.Uruguay.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Uruguay.Flag"
        }
        ,{
            TeamNumber: "21"
            ,Team: "team.Portugal.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Portugal.Flag"
        }
        ,{
            TeamNumber: "22"
            ,Team: "team.Spain.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Spain.Flag"
        }
        ,{
            TeamNumber: "23"
            ,Team: "team.Morocco.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Morocco.Flag"
        }
        ,{
            TeamNumber: "24"
            ,Team: "team.Iran.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Iran.Flag"
        }
        ,{
            TeamNumber: "31"
            ,Team: "team.France.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.France.Flag"
        }
        ,{
            TeamNumber: "32"
            ,Team: "team.Australia.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Australia.Flag"
        }
        ,{
            TeamNumber: "33"
            ,Team: "team.Peru.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Peru.Flag"
        }
        ,{
            TeamNumber: "34"
            ,Team: "team.Denmark.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Denmark.Flag"
        }
        ,{
            TeamNumber: "41"
            ,Team: "team.Argentina.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Argentina.Flag"
        }
        ,{
            TeamNumber: "42"
            ,Team: "team.Iceland.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Iceland.Flag"
        }
        ,{
            TeamNumber: "43"
            ,Team: "team.Croatia.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Croatia.Flag"
        }
        ,{
            TeamNumber: "44"
            ,Team: "team.Nigeria.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Nigeria.Flag"
        }
        ,{
            TeamNumber: "51"
            ,Team: "team.Brazil.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Brazil.Flag"
        }
        ,{
            TeamNumber: "52"
            ,Team: "team.Switzerland.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Switzerland.Flag"
        }
        ,{
            TeamNumber: "53"
            ,Team: "team.Costa Rica.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Costa Rica.Flag"
        }
        ,{
            TeamNumber: "54"
            ,Team: "team.Serbia.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Servia.Flag"
        }
        ,{
            TeamNumber: "61"
            ,Team: "team.Germany.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Germany.Flag"
        }
        ,{
            TeamNumber: "62"
            ,Team: "team.Mexico.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Mexico.Flag"
        }
        ,{
            TeamNumber: "63"
            ,Team: "team.Sweden.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Sweden.Flag"
        }
        ,{
            TeamNumber: "64"
            ,Team: "team.South Korea.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.South Korea.Flag"
        }
        ,{
            TeamNumber: "71"
            ,Team: "team.Belgium.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Belgium.Flag"
        }
        ,{
            TeamNumber: "72"
            ,Team: "team.Panama.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Panama.Flag"
        }
        ,{
            TeamNumber: "73"
            ,Team: "team.Tunisia.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Tunisia.Flag"
        }
        ,{
            TeamNumber: "74"
            ,Team: "team.England.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.England.Flag"
        }
        ,{
            TeamNumber: "81"
            ,Team: "team.Poland.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Poland.Flag"
        }
        ,{
            TeamNumber: "82"
            ,Team: "team.Senegal.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Senegal.Flag"
        }
        ,{
            TeamNumber: "83"
            ,Team: "team.Colombia.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Colombia.Flag"
        }
        ,{
            TeamNumber: "84"
            ,Team: "team.Japan.Name"
            ,ChampionContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag: "team.Japan.Flag"
        }

    ],
    'isMicroMessage': function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }
        else {
            return false;
        }
    }
});

var teamAddress = "0x47cf8fdadaa6de2d4c2651802f11578c61931444";
var teamAbi = [{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"SafetySendout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"teamNumber","type":"uint256"}],"name":"SetChampion","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"teams","outputs":[{"name":"teamNumber","type":"uint256"},{"name":"teamName","type":"string"},{"name":"totalContributions","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"contributor","type":"address"}],"name":"AddContributor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"teamNumber","type":"uint256"},{"name":"teamName","type":"string"}],"name":"AddTeam","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"matches","outputs":[{"name":"matchNumber","type":"uint256"},{"name":"homeTeamNumber","type":"uint256"},{"name":"awayTeamNumber","type":"uint256"},{"name":"startTime","type":"uint256"},{"name":"homeScore","type":"uint256"},{"name":"awayScore","type":"uint256"},{"name":"finished","type":"bool"},{"name":"rewardSent","type":"bool"},{"name":"jackpot","type":"uint256"},{"name":"totalHomeWinContributions","type":"uint256"},{"name":"totalAwayWinContributions","type":"uint256"},{"name":"totalDrawContributions","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"founder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"championRewardSent","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"matchesContributions","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"matchNumber","type":"uint256"},{"name":"homeScore","type":"uint256"},{"name":"awayScore","type":"uint256"}],"name":"FinalizeMatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"matchNumber","type":"uint256"}],"name":"SendoutSingleMatchReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"teamsContributionsSent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"matchesContributionsSent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allContributorsMap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"SendoutChampionReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newFounder","type":"address"}],"name":"SetFounder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"championJackpot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"matchNumber","type":"uint256"},{"name":"homeTeamNumber","type":"uint256"},{"name":"awayTeamNumber","type":"uint256"},{"name":"startTime","type":"uint256"}],"name":"AddMatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"matchNumber","type":"uint256"},{"name":"result","type":"uint256"}],"name":"SingleMatchBet","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allContributors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"teamsContributions","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"teamNumber","type":"uint256"}],"name":"ChampionBet","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}];
var contractInstance = null;

Template.team.helpers({
    'contribution': function(teamNumber) {

        if (!contractInstance && chain3) {
            contractInstance = chain3.mc.contract(gameAbi).at(gameAddress);
        }

        var team = contractInstance.teams(teamNumber);
        var index = 2;
        return Math.floor(team[index]/1000000000000000000 + 0.5)+ ' WCT';
    }
});

Template.team.events({
    'click .contractClick': function(e) {
        myContract = $(e.target).data('contract');
        // Modal.show('qrModal');
    }
 });


