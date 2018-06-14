import {Template} from 'meteor/templating';
import './games.html';

var myContract;

Template.gamebody.helpers({
    games:[
        {
            GameNumber: "1"
            ,Team1: "team.Russia.Name"
            ,Team2: "team.Saudi Arabia.Name"
            ,GMTTime: "2018/06/14 15:00 UTC"
            ,City: "location.Moscow"
            ,Team1WinContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,DrawContract: "0x356therh567ujmmtwrwy6"
            ,Team2WinContract: "0x35hru585itjt95o607l87"
            ,Flag1: "team.Russia.Flag"
            ,Flag2: "team.Saudi Arabia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "2"
            ,Team1: "team.Egypt.Name"
            ,Team2: "team.Uruguay.Name"
            ,GMTTime: "2018/06/15 12:00 UTC"
            ,City: "location.Yekaterinburg"
            ,Team1WinContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,DrawContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Team2WinContract: "0x8Ec907e81d4aeCA7AB55c22D520Dd2837fd628B9"
            ,Flag1: "team.Egypt.Flag"
            ,Flag2: "team.Uruguay.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "3"
            ,Team1: "team.Morocco.Name"
            ,Team2: "team.Iran.Name"
            ,GMTTime: "2018/06/15 15:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Morocco.Flag"
            ,Flag2: "team.Iran.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "4"
            ,Team1: "team.Portugal.Name"
            ,Team2: "team.Spain.Name"
            ,GMTTime: "2018/06/15 18:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Portugal.Flag"
            ,Flag2: "team.Spain.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "5"
            ,Team1: "team.France.Name"
            ,Team2: "team.Australia.Name"
            ,GMTTime: "2018/06/16 10:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.France.Flag"
            ,Flag2: "team.Australia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "6"
            ,Team1: "team.Argentina.Name"
            ,Team2: "team.Iceland.Name"
            ,GMTTime: "2018/06/16 13:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Argentina.Flag"             
            ,Flag2: "team.Iceland.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "7"
            ,Team1: "team.Peru.Name"
            ,Team2: "team.Denmark.Name"
            ,GMTTime: "2018/06/16 16:00 UTC"
            ,City:"location.Saransk"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Peru.Flag"             
            ,Flag2: "team.Denmark.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "8"
            ,Team1: "team.Croatia.Name"
            ,Team2: "team.Nigeria.Name"
            ,GMTTime: "2018/06/16 19:00 UTC"
            ,City:"location.Kaliningrad"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Croatia.Flag"             
            ,Flag2: "team.Nigeria.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "9"
            ,Team1: "team.Costa Rica.Name"
            ,Team2: "team.Serbia.Name"
            ,GMTTime: "2018/06/17 12:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Costa Rica.Flag"             
            ,Flag2: "team.Serbia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "10"
            ,Team1: "team.Germany.Name"
            ,Team2: "team.Mexico.Name"
            ,GMTTime: "2018/06/17 15:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Germany.Flag"             
            ,Flag2: "team.Mexico.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "11"
            ,Team1: "team.Brazil.Name"
            ,Team2: "team.Switzerland.Name"
            ,GMTTime: "2018/06/17 18:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Brazil.Flag"             
            ,Flag2: "team.Switzerland.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "12"
            ,Team1: "team.Sweden.Name"
            ,Team2: "team.South Korea.Name"
            ,GMTTime: "2018/06/18 12:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Sweden.Flag"             
            ,Flag2: "team.South Korea.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "13"
            ,Team1: "team.Belgium.Name"
            ,Team2: "team.Panama.Name"
            ,GMTTime: "2018/06/18 15:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Belgium.Flag"             
            ,Flag2: "team.Panama.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "14"
            ,Team1: "team.Tunisia.Name"
            ,Team2: "team.England.Name"
            ,GMTTime: "2018/06/18 18:00 UTC"
            ,City:"location.Volgograd"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Tunisia.Flag"             
            ,Flag2: "team.England.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "15"
            ,Team1: "team.Colombia.Name"
            ,Team2: "team.Japan.Name"
            ,GMTTime: "2018/06/19 12:00 UTC"
            ,City:"location.Saransk"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Colombia.Flag"             
            ,Flag2: "team.Japan.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "16"
            ,Team1: "team.Poland.Name"
            ,Team2: "team.Senegal.Name"
            ,GMTTime: "2018/06/19 15:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Poland.Flag"             
            ,Flag2: "team.Senegal.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "17"
            ,Team1: "team.Russia.Name"
            ,Team2: "team.Egypt.Name"
            ,GMTTime: "2018/06/19 18:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Russia.Flag"             
            ,Flag2: "team.Egypt.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "18"
            ,Team1: "team.Portugal.Name"
            ,Team2: "team.Morocco.Name"
            ,GMTTime: "2018/06/20 12:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Portugal.Flag"             
            ,Flag2: "team.Morocco.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "19"
            ,Team1: "team.Uruguay.Name"
            ,Team2: "team.Saudi Arabia.Name"
            ,GMTTime: "2018/06/20 15:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Uruguay.Flag"             
            ,Flag2: "team.Saudi Arabia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "20"
            ,Team1: "team.Iran.Name"
            ,Team2: "team.Spain.Name"
            ,GMTTime: "2018/06/20 18:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Iran.Flag"             
            ,Flag2: "team.Spain.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "21"
            ,Team1: "team.Denmark.Name"
            ,Team2: "team.Australia.Name"
            ,GMTTime: "2018/06/21 12:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Denmark.Flag"             
            ,Flag2: "team.Australia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "22"
            ,Team1: "team.France.Name"
            ,Team2: "team.Peru.Name"
            ,GMTTime: "2018/06/21 15:00 UTC"
            ,City:"location.Yekaterinburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.France.Flag"             
            ,Flag2: "team.Peru.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "23"
            ,Team1: "team.Argentina.Name"
            ,Team2: "team.Croatia.Name"
            ,GMTTime: "2018/06/21 18:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Argentina.Flag"             
            ,Flag2: "team.Croatia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "24"
            ,Team1: "team.Brazil.Name"
            ,Team2: "team.Costa Rica.Name"
            ,GMTTime: "2018/06/22 12:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Brazil.Flag"             
            ,Flag2: "team.Costa Rica.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "25"
            ,Team1: "team.Nigeria.Name"
            ,Team2: "team.Iceland.Name"
            ,GMTTime: "2018/06/22 15:00 UTC"
            ,City:"location.Volgograd"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Nigeria.Flag"             
            ,Flag2: "team.Iceland.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "26"
            ,Team1: "team.Serbia.Name"
            ,Team2: "team.Switzerland.Name"
            ,GMTTime: "2018/06/22 18:00 UTC"
            ,City:"location.Kaliningrad"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Serbia.Flag"             
            ,Flag2: "team.Switzerland.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "27"
            ,Team1: "team.Belgium.Name"
            ,Team2: "team.Tunisia.Name"
            ,GMTTime: "2018/06/23 12:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Belgium.Flag"             
            ,Flag2: "team.Tunisia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "28"
            ,Team1: "team.South Korea.Name"
            ,Team2: "team.Mexico.Name"
            ,GMTTime: "2018/06/23 15:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.South Korea.Flag"             
            ,Flag2: "team.Mexico.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "29"
            ,Team1: "team.Germany.Name"
            ,Team2: "team.Sweden.Name"
            ,GMTTime: "2018/06/23 18:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Germany.Flag"             
            ,Flag2: "team.Sweden.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "30"
            ,Team1: "team.England.Name"
            ,Team2: "team.Panama.Name"
            ,GMTTime: "2018/06/24 12:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.England.Flag"             
            ,Flag2: "team.Panama.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "31"
            ,Team1: "team.Japan.Name"
            ,Team2: "team.Senegal.Name"
            ,GMTTime: "2018/06/24 15:00 UTC"
            ,City:"location.Yekaterinburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Japan.Flag"             
            ,Flag2: "team.Senegal.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "32"
            ,Team1: "team.Poland.Name"
            ,Team2: "team.Colombia.Name"
            ,GMTTime: "2018/06/24 18:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Poland.Flag"             
            ,Flag2: "team.Colombia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "33"
            ,Team1: "team.Uruguay.Name"
            ,Team2: "team.Russia.Name"
            ,GMTTime: "2018/06/25 14:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Uruguay.Flag"             
            ,Flag2: "team.Russia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "34"
            ,Team1: "team.Saudi Arabia.Name"
            ,Team2: "team.Egypt.Name"
            ,GMTTime: "2018/06/25 14:00 UTC"
            ,City:"location.Volgograd"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Saudi Arabia.Flag"             
            ,Flag2: "team.Egypt.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "35"
            ,Team1: "team.Spain.Name"
            ,Team2: "team.Morocco.Name"
            ,GMTTime: "2018/06/25 18:00 UTC"
            ,City:"location.Kaliningrad"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Spain.Flag"             
            ,Flag2: "team.Morocco.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "36"
            ,Team1: "team.Iran.Name"
            ,Team2: "team.Portugal.Name"
            ,GMTTime: "2018/06/25 18:00 UTC"
            ,City:"location.Saransk"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Iran.Flag"             
            ,Flag2: "team.Portugal.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "37"
            ,Team1: "team.Australia.Name"
            ,Team2: "team.Peru.Name"
            ,GMTTime: "2018/06/26 14:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Australia.Flag"             
            ,Flag2: "team.Peru.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "38"
            ,Team1: "team.Denmark.Name"
            ,Team2: "team.France.Name"
            ,GMTTime: "2018/06/26 14:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Denmark.Flag"             
            ,Flag2: "team.France.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "39"
            ,Team1: "team.Nigeria.Name"
            ,Team2: "team.Argentina.Name"
            ,GMTTime: "2018/06/26 18:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Nigeria.Flag"             
            ,Flag2: "team.Argentina.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "40"
            ,Team1: "team.Iceland.Name"
            ,Team2: "team.Croatia.Name"
            ,GMTTime: "2018/06/26 18:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Iceland.Flag"             
            ,Flag2: "team.Croatia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "41"
            ,Team1: "team.South Korea.Name"
            ,Team2: "team.Germany.Name"
            ,GMTTime: "2018/06/27 14:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.South Korea.Flag"             
            ,Flag2: "team.Germany.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "42"
            ,Team1: "team.Mexico.Name"
            ,Team2: "team.Sweden.Name"
            ,GMTTime: "2018/06/27 14:00 UTC"
            ,City:"location.Yekaterinburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Mexico.Flag"             
            ,Flag2: "team.Sweden.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "43"
            ,Team1: "team.Serbia.Name"
            ,Team2: "team.Brazil.Name"
            ,GMTTime: "2018/06/27 18:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Serbia.Flag"             
            ,Flag2: "team.Brazil.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "44"
            ,Team1: "team.Switzerland.Name"
            ,Team2: "team.Costa Rica.Name"
            ,GMTTime: "2018/06/27 18:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Switzerland.Flag"             
            ,Flag2: "team.Costa Rica.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "45"
            ,Team1: "team.Japan.Name"
            ,Team2: "team.Poland.Name"
            ,GMTTime: "2018/06/28 14:00 UTC"
            ,City:"location.Volgograd"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Japan.Flag"             
            ,Flag2: "team.Poland.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "46"
            ,Team1: "team.Senegal.Name"
            ,Team2: "team.Colombia.Name"
            ,GMTTime: "2018/06/28 14:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Senegal.Flag"             
            ,Flag2: "team.Colombia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "47"
            ,Team1: "team.Panama.Name"
            ,Team2: "team.Tunisia.Name"
            ,GMTTime: "2018/06/28 18:00 UTC"
            ,City:"location.Saransk"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.Panama.Flag"             
            ,Flag2: "team.Tunisia.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "48"
            ,Team1: "team.England.Name"
            ,Team2: "team.Belgium.Name"
            ,GMTTime: "2018/06/28 18:00 UTC"
            ,City:"location.Kaliningrad"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.England.Flag"             
            ,Flag2: "team.Belgium.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "49"
            ,Team1: "team.C1.Name"
            ,Team2: "team.D2.Name"
            ,GMTTime: "2018/06/30 14:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.C1.Flag"             
            ,Flag2: "team.D2.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "50"
            ,Team1: "team.A1.Name"
            ,Team2: "team.B2.Name"
            ,GMTTime: "2018/06/30 18:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.A1.Flag"             
            ,Flag2: "team.B2.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "51"
            ,Team1: "team.B1.Name"
            ,Team2: "team.A2.Name"
            ,GMTTime: "2018/07/01 14:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.B1.Flag"             
            ,Flag2: "team.A2.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "52"
            ,Team1: "team.D1.Name"
            ,Team2: "team.C2.Name"
            ,GMTTime: "2018/07/01 18:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.D1.Flag"             
            ,Flag2: "team.C2.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "53"
            ,Team1: "team.E1.Name"
            ,Team2: "team.F2.Name"
            ,GMTTime: "2018/07/02 14:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.E1.Flag"             
            ,Flag2: "team.F2.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "54"
            ,Team1: "team.G1.Name"
            ,Team2: "team.H2.Name"
            ,GMTTime: "2018/07/02 18:00 UTC"
            ,City:"location.Rostov"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.G1.Flag"             
            ,Flag2: "team.H2.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "55"
            ,Team1: "team.F1.Name"
            ,Team2: "team.E2.Name"
            ,GMTTime: "2018/07/03 14:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.F1.Flag"             
            ,Flag2: "team.E2.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "56"
            ,Team1: "team.H1.Name"
            ,Team2: "team.G2.Name"
            ,GMTTime: "2018/07/03 18:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.H1.Flag"             
            ,Flag2: "team.G2.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "57"
            ,Team1: "team.49Win.Name"
            ,Team2: "team.50Win.Name"
            ,GMTTime: "2018/07/06 14:00 UTC"
            ,City:"location.Nizhny Novgorod"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.49Win.Flag"             
            ,Flag2: "team.50Win.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "58"
            ,Team1: "team.53Win.Name"
            ,Team2: "team.54Win.Name"
            ,GMTTime: "2018/07/06 18:00 UTC"
            ,City:"location.Kazan"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.53Win.Flag"             
            ,Flag2: "team.54Win.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "59"
            ,Team1: "team.55Win.Name"
            ,Team2: "team.56Win.Name"
            ,GMTTime: "2018/07/07 14:00 UTC"
            ,City:"location.Samara"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.51Win.Flag"             
            ,Flag2: "team.52Win.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "60"
            ,Team1: "team.51Win.Name"
            ,Team2: "team.52Win.Name"
            ,GMTTime: "2018/07/07 18:00 UTC"
            ,City:"location.Sochi"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.55Win.Flag"             
            ,Flag2: "team.56Win.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "61"
            ,Team1: "team.57Win.Name"
            ,Team2: "team.58Win.Name"
            ,GMTTime: "2018/07/10 18:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.57Win.Flag"             
            ,Flag2: "team.58Win.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "62"
            ,Team1: "team.59Win.Name"
            ,Team2: "team.60Win.Name"
            ,GMTTime: "2018/07/11 18:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.59Win.Flag"             
            ,Flag2: "team.60Win.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "63"
            ,Team1: "team.61Lose.Name"
            ,Team2: "team.62Lose.Name"
            ,GMTTime: "2018/07/14 14:00 UTC"
            ,City:"location.Saint Petersburg"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.61Lose.Flag"             
            ,Flag2: "team.62Lose.Flag"
            ,GameText: "games.gametext"
        }
        ,{
            GameNumber: "64"
            ,Team1: "team.61Win.Name"
            ,Team2: "team.62Win.Name"
            ,GMTTime: "2018/07/15 15:00 UTC"
            ,City:"location.Moscow"
            ,Team1WinContract: ""
            ,DrawContract: ""
            ,Team2WinContract: ""
            ,Flag1: "team.61Win.Flag"             
            ,Flag2: "team.62Win.Flag"
            ,GameText: "games.gametext"
            ,JackpotTitle: "games.jackpottitle"
        }
    ],
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

Template.game.helpers({
    'localTime': function(inputDate){
        var nd = new Date(inputDate.replace(/-/g, "/"));
        return nd.toLocaleDateString() +' '+ nd.toLocaleTimeString();
    },
    'contribution': function(paramJson) {
        paramJson = paramJson.hash;
        var result = paramJson.result;
        var gameNumber = paramJson.gameNumber;

        if (!contractInstance && (typeof chain3 !== 'undefined')) {
            contractInstance = chain3.mc.contract(contractAbi).at(contractAddress);
        }

        if (contractInstance) {
            var match = contractInstance.matches(gameNumber);
            var index = result + 9;
            return Math.floor(match[index]/1000000000000000000 + 0.5)+ ' WCT';
        } else {
            return "";
        }
    },
    'jackpot': function(gameNumber) {

        if (!contractInstance && (typeof chain3 !== 'undefined')) {
            contractInstance = chain3.mc.contract(contractAbi).at(contractAddress);
        }

        if (contractInstance) {
            var match = contractInstance.matches(gameNumber);
            var index = 8;
            return Math.floor(match[index]/1000000000000000000 + 0.5)+ ' WCT';
        } else {
            return "";
        }
    },
    'betTokenBalances': function() {

    },
    'isShowButton': function(inputTime){
        var currentTimeStamp = new Date().getTime();
        var gameTimeStamp = new Date(inputTime).getTime();

        if(currentTimeStamp >= gameTimeStamp) {
            return false;
        } 
        return true;
    }
});

Template.game.events({
    'click .contractClick': function(e) {
        myContract = $(e.target).data('contract');
        Modal.show('qrModal');
    }
 });

Template.qrModal.helpers({
    contract: function(){
        return myContract;
    },
    clipboard: function(){
        var clipboard = new Clipboard('.btn');
    }
});

