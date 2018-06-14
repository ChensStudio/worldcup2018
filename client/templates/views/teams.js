import {Template} from 'meteor/templating';
import './teams.html';

var myContract;

Template.teambody.helpers({
    teams:[
        {
            TeamNumber1: "51"
            ,Team1: "team.Brazil.Name"
            ,ChampionContract1: "0x5420651d91edeb7387a36976d73b372d467879de"
            ,Flag1: "team.Brazil.Flag"
            ,TeamNumber2: "61"
            ,Team2: "team.Germany.Name"
            ,ChampionContract2: "0xbdda929323fa001b2062d46057cd3ca2c8a6d9a7"
            ,Flag2: "team.Germany.Flag"
        }
        ,{
            TeamNumber1: "41"
            ,Team1: "team.Argentina.Name"
            ,ChampionContract1: "0x1c0de2d0325f9b980420a479ceda8d5145c9988a"
            ,Flag1: "team.Argentina.Flag"
            ,TeamNumber2: "31"
            ,Team2: "team.France.Name"
            ,ChampionContract2: "0xc9dd044a50e97c0f79283c6db097eb1364b250a8"
            ,Flag2: "team.France.Flag"
        }
        ,{
            TeamNumber1: "21"
            ,Team1: "team.Portugal.Name"
            ,ChampionContract1: "0x0aae78ea04e03194088268fd9af57060fb3b15ea"
            ,Flag1: "team.Portugal.Flag"
            ,TeamNumber2: "22"
            ,Team2: "team.Spain.Name"
            ,ChampionContract2: "0x5b2ef1969d6c3a8e0c9dd0db2c32d8ddcbb4702a"
            ,Flag2: "team.Spain.Flag"
        }
        ,{
            TeamNumber1: "71"
            ,Team1: "team.Belgium.Name"
            ,ChampionContract1: "0xefc0e8eea8c2b3a5cdd4445feb52d9f5ee32b255"
            ,Flag1: "team.Belgium.Flag"
            ,TeamNumber2: "74"
            ,Team2: "team.England.Name"
            ,ChampionContract2: "0x6a3a2c6790c38fbdb507e95987db994d5fa3b275"
            ,Flag2: "team.England.Flag"
        }
        ,{
            TeamNumber1: "11"
            ,Team1: "team.Russia.Name"
            ,ChampionContract1: "0x4ecdf0ad005164522e151099388361fa8ba8c982"
            ,Flag1: "team.Russia.Flag"
            ,TeamNumber2: "12"
            ,Team2: "team.Saudi Arabia.Name"
            ,ChampionContract2: "0xab4fabc7576b1956917acb882e52f9a383fdba2a"
            ,Flag2: "team.Saudi Arabia.Flag"
        }
        ,{
            TeamNumber1: "13"
            ,Team1: "team.Egypt.Name"
            ,ChampionContract1: "0x4edc21c45e3663a129af8d6b4231508409a47025"
            ,Flag1: "team.Egypt.Flag"
            ,TeamNumber2: "14"
            ,Team2: "team.Uruguay.Name"
            ,ChampionContract2: "0x0a430fd0c42f57f070928e4756002063bef0dfbe"
            ,Flag2: "team.Uruguay.Flag"
        }
        ,{
            TeamNumber1: "23"
            ,Team1: "team.Morocco.Name"
            ,ChampionContract1: "0x7bef41b8a0b58dedf79895401082d3bbfe34ed31"
            ,Flag1: "team.Morocco.Flag"
            ,TeamNumber2: "24"
            ,Team2: "team.Iran.Name"
            ,ChampionContract2: "0xf9016370d3273284e729a8b799c1c9d236bb1751"
            ,Flag2: "team.Iran.Flag"
        }
        ,{
            TeamNumber1: "32"
            ,Team1: "team.Australia.Name"
            ,ChampionContract1: "0x62e1bc7c65c72e4613abbd1e0eb9b52b53d46345"
            ,Flag1: "team.Australia.Flag"
            ,TeamNumber2: "33"
            ,Team2: "team.Peru.Name"
            ,ChampionContract2: "0xb122a0fb1044cfcecff2a028aa7b24b58e6a27a8"
            ,Flag2: "team.Peru.Flag"
        }
        ,{
            TeamNumber1: "34"
            ,Team1: "team.Denmark.Name"
            ,ChampionContract1: "0xf7ebdcd7bab3fba6a0b4e2cd6e5959ba341f9b13"
            ,Flag1: "team.Denmark.Flag"
            ,TeamNumber2: "42"
            ,Team2: "team.Iceland.Name"
            ,ChampionContract2: "0x7399bf8dc6aa699abfffcbf0535f2d1c4f3a6ac3"
            ,Flag2: "team.Iceland.Flag"
        }
        ,{
            TeamNumber1: "43"
            ,Team1: "team.Croatia.Name"
            ,ChampionContract1: "0x6d7b1842a7d424fa008632d75a9b2d637a465d37"
            ,Flag1: "team.Croatia.Flag"
            ,TeamNumber2: "44"
            ,Team2: "team.Nigeria.Name"
            ,ChampionContract2: "0x3b91ef36a24d2f980ddac165ee7b800e7a378abc"
            ,Flag2: "team.Nigeria.Flag"
        }
        ,{
            TeamNumber1: "52"
            ,Team1: "team.Switzerland.Name"
            ,ChampionContract1: "0x1df1b2977f003dfb5a51a5ecc3872fe97f7342c0"
            ,Flag1: "team.Switzerland.Flag"
            ,TeamNumber2: "53"
            ,Team2: "team.Costa Rica.Name"
            ,ChampionContract2: "0x45a93f76fc624ff88a9298cc9fe022fb8e97c2d5"
            ,Flag2: "team.Costa Rica.Flag"
        }
        ,{
            TeamNumber1: "54"
            ,Team1: "team.Serbia.Name"
            ,ChampionContract1: "0x86945f96f28f71e1d400cf938cd8a31ce0fa1a1f"
            ,Flag1: "team.Serbia.Flag"
            ,TeamNumber2: "62"
            ,Team2: "team.Mexico.Name"
            ,ChampionContract2: "0x038da370f7a750424681a57d72a075b1b9f74518"
            ,Flag2: "team.Mexico.Flag"
        }
        ,{
            TeamNumber1: "63"
            ,Team1: "team.Sweden.Name"
            ,ChampionContract1: "0x68b6e717929a65b214d61e22961eefc0cf45cf3e"
            ,Flag1: "team.Sweden.Flag"
            ,TeamNumber2: "64"
            ,Team2: "team.South Korea.Name"
            ,ChampionContract2: "0x02c595e1b903601211e9edae87be31ebbe876495"
            ,Flag2: "team.South Korea.Flag"
        }
        ,{
            TeamNumber1: "72"
            ,Team1: "team.Panama.Name"
            ,ChampionContract1: "0x44c8e35159066d79323db117395e18df09db0086"
            ,Flag1: "team.Panama.Flag"
            ,TeamNumber2: "73"
            ,Team2: "team.Tunisia.Name"
            ,ChampionContract2: "0x937b3c413e03e99e27869ecb1f120bf90c604034"
            ,Flag2: "team.Tunisia.Flag"
        }
        ,{
            TeamNumber1: "81"
            ,Team1: "team.Poland.Name"
            ,ChampionContract1: "0xc8be0bfadfd280a53b0fd362d01c5da1becd54a5"
            ,Flag1: "team.Poland.Flag"
            ,TeamNumber2: "82"
            ,Team2: "team.Senegal.Name"
            ,ChampionContract2: "0x1b1ae0103d5c6258e61def297c55b34223d7cebf"
            ,Flag2: "team.Senegal.Flag"
        }
        ,{
            TeamNumber1: "83"
            ,Team1: "team.Colombia.Name"
            ,ChampionContract1: "0x2c2e709a3bca9202a367aa260f9265edb3eb7e7b"
            ,Flag1: "team.Colombia.Flag"
            ,TeamNumber2: "84"
            ,Team2: "team.Japan.Name"
            ,ChampionContract2: "0x2c7e28303bd27b6659fcdb75bd937c4dfa9cd453"
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
    },
    'isShowButton': function(){
        var currentTimeStamp = new Date().getTime();
        var gameTimeStamp = new Date("2018/07/10 18:00 UTC").getTime();

        if(currentTimeStamp >= gameTimeStamp) {
            return false;
        } 
        return true;
    }
});

Template.team.events({
    'click .contractClick': function(e) {
        myContract = $(e.target).data('contract');
        // myContract = e.target.dataset.contract;
        Modal.show('qrModal2');
    }
 });

Template.qrModal2.helpers({
    contract: function(){
        return myContract;
    },
    tx: function(){
        return "moac:"+myContract+"?token=MOAC&gas=150000";
    },
    clipboard: function(){
        var clipboard = new Clipboard('.btn');
    }
});
