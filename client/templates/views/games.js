import {Template} from 'meteor/templating';
import './games.html';

Template.body.helpers({
    games:[
        {
            GameNumber: "1"
            ,Team1: "team.Russia"
            ,Team2: "team.Saudi Arabia"
            ,GMTTime: "2018-06-14 15:00 UTC"
            ,City: "location.Moscow"
            ,Team1WinContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,DrawContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Team2WinContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
        }
        ,{
            GameNumber: "2"
            ,Team1: "team.Egypt"
            ,Team2: "team.Uruguay"
            ,GMTTime: "2018-06-15 12:00 UTC"
            ,City: "location.Yekaterinburg"
            ,Team1WinContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,DrawContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Team2WinContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
        }
        ,{
            GameNumber: "3"
            ,Team1: "team.Morocco"
            ,Team2: "team.Iran"
            ,GMTTime: "2018-06-15 15:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "4"
            ,Team1: "team.Portugal"
            ,Team2: "team.Spain"
            ,GMTTime: "2018-06-15 18:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "5"
            ,Team1: "team.France"
            ,Team2: "team.Australia"
            ,GMTTime: "2018-06-16 10:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "6"
            ,Team1: "team.Argentina"
            ,Team2: "team.Iceland"
            ,GMTTime: "2018-06-16 13:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "7"
            ,Team1: "team.Peru"
            ,Team2: "team.Denmark"
            ,GMTTime: "2018-06-16 16:00 UTC"
            ,City:"location.Saransk"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "8"
            ,Team1: "team.Croatia"
            ,Team2: "team.Nigeria"
            ,GMTTime: "2018-06-17 19:00 UTC"
            ,City:"location.Kaliningrad"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "9"
            ,Team1: "team.Costa Rica"
            ,Team2: "team.Serbia"
            ,GMTTime: "2018-06-17 12:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "10"
            ,Team1: "team.Germany"
            ,Team2: "team.Mexico"
            ,GMTTime: "2018-06-17 15:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "11"
            ,Team1: "team.Brazil"
            ,Team2: "team.Switzerland"
            ,GMTTime: "2018-06-17 18:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "12"
            ,Team1: "team.Sweden"
            ,Team2: "team.South Korea"
            ,GMTTime: "2018-06-18 12:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "13"
            ,Team1: "team.Belgium"
            ,Team2: "team.Panama"
            ,GMTTime: "2018-06-18 15:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "14"
            ,Team1: "team.Tunisia"
            ,Team2: "team.England"
            ,GMTTime: "2018-06-18 18:00 UTC"
            ,City:"location.Volgograd"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "15"
            ,Team1: "team.Colombia"
            ,Team2: "team.Japan"
            ,GMTTime: "2018-06-19 12:00 UTC"
            ,City:"location.Saransk"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "16"
            ,Team1: "team.Poland"
            ,Team2: "team.Senegal"
            ,GMTTime: "2018-06-19 15:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "17"
            ,Team1: "team.Russia"
            ,Team2: "team.Egypt"
            ,GMTTime: "2018-06-19 18:00"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "18"
            ,Team1: "team.Portugal"
            ,Team2: "team.Morocco"
            ,GMTTime: "2018-06-20 12:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "19"
            ,Team1: "team.Uruguay"
            ,Team2: "team.Saudi Arabia"
            ,GMTTime: "2018-06-20 15:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "20"
            ,Team1: "team.Iran"
            ,Team2: "team.Spain"
            ,GMTTime: "2018-06-20 18:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "21"
            ,Team1: "team.Denmark"
            ,Team2: "team.Australia"
            ,GMTTime: "2018-06-21 12:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "22"
            ,Team1: "team.France"
            ,Team2: "team.Peru"
            ,GMTTime: "2018-06-21 15:00 UTC"
            ,City:"location.Yekaterinburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "23"
            ,Team1: "team.Argentina"
            ,Team2: "team.Croatia"
            ,GMTTime: "2018-06-21 18:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "24"
            ,Team1: "team.Brazil"
            ,Team2: "team.Costa Rica"
            ,GMTTime: "2018-06-22 12:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "25"
            ,Team1: "team.Nigeria"
            ,Team2: "eam.Iceland"
            ,GMTTime: "2018-06-22 15:00 UTC"
            ,City:"location.Volgograd"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "26"
            ,Team1: "team.Serbia"
            ,Team2: "team.Switzerland"
            ,GMTTime: "2018-06-22 18:00 UTC"
            ,City:"location.Kaliningrad"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "27"
            ,Team1: "team.Belgium"
            ,Team2: "team.Tunisia"
            ,GMTTime: "2018-06-23 12:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "28"
            ,Team1: "team.South Korea"
            ,Team2: "team.Mexico"
            ,GMTTime: "2018-06-23 15:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "29"
            ,Team1: "team.Germany"
            ,Team2: "team.Sweden"
            ,GMTTime: "2018-06-23 18:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "30"
            ,Team1: "team.England"
            ,Team2: "team.Panama"
            ,GMTTime: "2018-06-24 12:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "31"
            ,Team1: "team.Japan"
            ,Team2: "team.Senegal"
            ,GMTTime: "2018-06-24 15:00 UTC"
            ,City:"location.Yekaterinburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "32"
            ,Team1: "team.Poland"
            ,Team2: "team.Colombia"
            ,GMTTime: "2018-06-24 18:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "33"
            ,Team1: "team.Uruguay"
            ,Team2: "team.Russia"
            ,GMTTime: "2018-06-25 14:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "34"
            ,Team1: "team.Saudi Arabia"
            ,Team2: "team.Egypt"
            ,GMTTime: "2018-06-25 14:00 UTC"
            ,City:"location.Volgograd"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "35"
            ,Team1: "team.Spain"
            ,Team2: "team.Morocco"
            ,GMTTime: "2018-06-25 18:00 UTC"
            ,City:"location.Kaliningrad"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "36"
            ,Team1: "team.Iran"
            ,Team2: "team.Portugal"
            ,GMTTime: "2018-06-25 18:00 UTC"
            ,City:"location.Saransk"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "37"
            ,Team1: "team.Australia"
            ,Team2: "team.Peru"
            ,GMTTime: "2018-06-26 14:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "38"
            ,Team1: "team.Denmark"
            ,Team2: "team.France"
            ,GMTTime: "2018-06-26 14:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "39"
            ,Team1: "team.Nigeria"
            ,Team2: "team.Argentina"
            ,GMTTime: "2018-06-26 18:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "40"
            ,Team1: "team.Iceland"
            ,Team2: "team.Croatia"
            ,GMTTime: "2018-06-26 18:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "41"
            ,Team1: "team.South Korea"
            ,Team2: "team.Germany"
            ,GMTTime: "2018-06-27 14:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "42"
            ,Team1: "team.Mexico"
            ,Team2: "team.Sweden"
            ,GMTTime: "2018-06-27 14:00 UTC"
            ,City:"location.Yekaterinburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "43"
            ,Team1: "team.Serbia"
            ,Team2: "team.Brazil"
            ,GMTTime: "2018-06-27 18:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "44"
            ,Team1: "team.Switzerland"
            ,Team2: "team.Costa Rica"
            ,GMTTime: "2018-06-27 18:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "45"
            ,Team1: "team.Japan"
            ,Team2: "team.Poland"
            ,GMTTime: "2018-06-28 14:00 UTC"
            ,City:"location.Volgograd"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "46"
            ,Team1: "team.Senegal"
            ,Team2: "team.Colombia"
            ,GMTTime: "2018-06-28 14:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "47"
            ,Team1: "team.Panama"
            ,Team2: "team.Tunisia"
            ,GMTTime: "2018-06-28 18:00 UTC"
            ,City:"location.Saransk"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "48"
            ,Team1: "team.England"
            ,Team2: "team.Belgium"
            ,GMTTime: "2018-06-28 18:00 UTC"
            ,City:"location.Kaliningrad"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "49"
            ,Team1: "team.C1"
            ,Team2: "team.D2"
            ,GMTTime: "2018-06-30 14:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "50"
            ,Team1: "team.A1"
            ,Team2: "team.B2"
            ,GMTTime: "2018-06-30 18:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "51"
            ,Team1: "team.B1"
            ,Team2: "team.A2"
            ,GMTTime: "2018-07-01 14:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "52"
            ,Team1: "team.D1"
            ,Team2: "team.C2"
            ,GMTTime: "2018-07-01 18:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "53"
            ,Team1: "team.E1"
            ,Team2: "team.F2"
            ,GMTTime: "2018-07-02 14:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "54"
            ,Team1: "team.G1"
            ,Team2: "team.H2"
            ,GMTTime: "2018-07-02 18:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "55"
            ,Team1: "team.F1"
            ,Team2: "team.E2"
            ,GMTTime: "2018-07-03 14:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "56"
            ,Team1: "team.H1"
            ,Team2: "team.G2"
            ,GMTTime: "2018-07-03 18:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "57"
            ,Team1: "team.49Win"
            ,Team2: "team.50Win"
            ,GMTTime: "2018-07-06 14:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "58"
            ,Team1: "team.53Win"
            ,Team2: "team.54Win"
            ,GMTTime: "2018-07-06 18:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "59"
            ,Team1: "team.51Win"
            ,Team2: "team.52Win"
            ,GMTTime: "2018-07-07 18:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "60"
            ,Team1: "team.55Win"
            ,Team2: "team.56Win"
            ,Date: "2018-07-08"
            ,GMTTime: "02:00"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "61"
            ,Team1: "team.57Win"
            ,Team2: "team.58Win"
            ,GMTTime: "2018-07-10 18:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "62"
            ,Team1: "team.59Win"
            ,Team2: "team.60Win"
            ,GMTTime: "2018-07-11 18:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "63"
            ,Team1: "team.61Lose"
            ,Team2: "team.62Lose"
            ,GMTTime: "2018-07-14 14:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
        ,{
            GameNumber: "64"
            ,Team1: "team.61Win"
            ,Team2: "team.62Win"
            ,GMTTime: "2018-07-15 15:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
        }
    ],
});

Template.game.helpers({
    localTime: function(inputDate){
        var nd = new Date(inputDate);
        return nd.toLocaleDateString() +' '+ nd.toLocaleTimeString();
    }
});