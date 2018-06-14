import {Template} from 'meteor/templating';
import './teams.html';

var myContract;

Template.teambody.helpers({
    teams:[
        {
            TeamNumber1: "51"
            ,Team1: "team.Brazil.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Brazil.Flag"
            ,TeamNumber2: "61"
            ,Team2: "team.Germany.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Germany.Flag"
        }
        ,{
            TeamNumber1: "41"
            ,Team1: "team.Argentina.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Argentina.Flag"
            ,TeamNumber2: "31"
            ,Team2: "team.France.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.France.Flag"
        }
        ,{
            TeamNumber1: "21"
            ,Team1: "team.Portugal.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Portugal.Flag"
            ,TeamNumber2: "22"
            ,Team2: "team.Spain.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Spain.Flag"
        }
        ,{
            TeamNumber1: "71"
            ,Team1: "team.Belgium.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Belgium.Flag"
            ,TeamNumber2: "74"
            ,Team2: "team.England.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.England.Flag"
        }
        ,{
            TeamNumber1: "11"
            ,Team1: "team.Russia.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Russia.Flag"
            ,TeamNumber2: "12"
            ,Team2: "team.Saudi Arabia.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Saudi Arabia.Flag"
        }
        ,{
            TeamNumber1: "13"
            ,Team1: "team.Egypt.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Egypt.Flag"
            ,TeamNumber2: "14"
            ,Team2: "team.Uruguay.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Uruguay.Flag"
        }
        ,{
            TeamNumber1: "23"
            ,Team1: "team.Morocco.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Morocco.Flag"
            ,TeamNumber2: "24"
            ,Team2: "team.Iran.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Iran.Flag"
        }
        ,{
            TeamNumber1: "32"
            ,Team1: "team.Australia.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Australia.Flag"
            ,TeamNumber2: "33"
            ,Team2: "team.Peru.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Peru.Flag"
        }
        ,{
            TeamNumber1: "34"
            ,Team1: "team.Denmark.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Denmark.Flag"
            ,TeamNumber2: "42"
            ,Team2: "team.Iceland.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Iceland.Flag"
        }
        ,{
            TeamNumber1: "43"
            ,Team1: "team.Croatia.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Croatia.Flag"
            ,TeamNumber2: "44"
            ,Team2: "team.Nigeria.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Nigeria.Flag"
        }
        ,{
            TeamNumber1: "52"
            ,Team1: "team.Switzerland.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Switzerland.Flag"
            ,TeamNumber2: "53"
            ,Team2: "team.Costa Rica.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Costa Rica.Flag"
        }
        ,{
            TeamNumber1: "54"
            ,Team1: "team.Serbia.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Serbia.Flag"
            ,TeamNumber2: "62"
            ,Team2: "team.Mexico.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Mexico.Flag"
        }
        ,{
            TeamNumber1: "63"
            ,Team1: "team.Sweden.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Sweden.Flag"
            ,TeamNumber2: "64"
            ,Team2: "team.South Korea.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.South Korea.Flag"
        }
        ,{
            TeamNumber1: "72"
            ,Team1: "team.Panama.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Panama.Flag"
            ,TeamNumber2: "73"
            ,Team2: "team.Tunisia.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Tunisia.Flag"
        }
        ,{
            TeamNumber1: "81"
            ,Team1: "team.Poland.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Poland.Flag"
            ,TeamNumber2: "82"
            ,Team2: "team.Senegal.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Senegal.Flag"
        }
        ,{
            TeamNumber1: "83"
            ,Team1: "team.Colombia.Name"
            ,ChampionContract1: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Colombia.Flag"
            ,TeamNumber2: "84"
            ,Team2: "team.Japan.Name"
            ,ChampionContract2: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag2: "team.Japan.Flag"
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

Template.team.helpers({
    'contribution': function(teamNumber) {

        if (!contractInstance && (typeof chain3 !== 'undefined')) {
            contractInstance = chain3.mc.contract(contractAbi).at(contractAddress);
        }

        if (contractInstance) {
            var team = contractInstance.teams(teamNumber);
            var index = 2;
            return Math.floor(team[index]/1000000000000000000 + 0.5)+ ' WCT';
        } else {
            return "";
        }
    }
});

Template.team.events({
    'click .contractClick': function(e) {
        myContract = $(e.target).data('contract');
        Modal.show('qrModal');
    }
 });