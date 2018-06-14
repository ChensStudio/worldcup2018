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
            ,Team1WinContract: "0x6dde7004d653798420c7cba3dff5b508b7bb00d9"
            ,DrawContract: "0xb360e1d1ad379a5ea48e6e76d1c19cd4d9aab0f9"
            ,Team2WinContract: "0x9bef3c1ed4497edb1f63319436ee7959fce7a431"
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
            ,Team1WinContract: "0xaf962a8554667251f3fb2e4c1a8e3fd976eb6eef"
            ,DrawContract: "0xf2d4ac9764f3ab35be42c485cd3ecf3bcb9c1ffa"
            ,Team2WinContract: "0xcd346c5842e9b1ce1635fc9997b6f4e49e4b9ea7"
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
            ,Team1WinContract: "0xbeae504c88a9e7ded4834cf2b17f82e9b81cac13"
            ,DrawContract: "0x59a19b53f8d14ac7e7bb79219f749c43ac8103c6"
            ,Team2WinContract: "0xddac6baca566ee5e7d9b897aa3ae54b8d666d8ae"
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
            ,Team1WinContract: "0x279d227426735886c6fe2bacc9ecb55bc51b2a41"
            ,DrawContract: "0x6a0e6e7aa09211f3d7f86afee8562d0221eb5ffd"
            ,Team2WinContract: "0x42dfc599bbb279ccebbb243c9e000bc61d83f57f"
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
            ,Team1WinContract: "0x3dee8f2acc17859c11558168a8114bec124c04f9"
            ,DrawContract: "0x2b840f835d142ff9b3886e39490b494bd7976512"
            ,Team2WinContract: "0x7cba4218fe874dd974e8fc122bf13d4d5eab9ebf"
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
            ,Team1WinContract: "0x72a6f6ec37576e31a3df9c2e64035cc1b4f760ee"
            ,DrawContract: "0xb76b578e22fe2f39bcd501808d083d7a788ab948"
            ,Team2WinContract: "0x531a437be58742375680576226959f131efef370"
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
            ,Team1WinContract: "0x0391b1780ef9320f7229d767b7ae451400bc059d"
            ,DrawContract: "0x8e2d9136c505c6fdbcb61fcc0ee4e8f15f07392c"
            ,Team2WinContract: "0x91bde8dcce2b8d2be791d7d0af67899ba83a0fb8"
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
            ,Team1WinContract: "0x3c669fe8e753a930a33a5fcde24584e80a9dd782"
            ,DrawContract: "0x82c33ef816aac5a7d442d6eb1446b857ea0076e1"
            ,Team2WinContract: "0xc4ecd215b390395521612a99c400252d017a1b38"
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
            ,Team1WinContract: "0x6468a1d63f8a1b287f8e8fe7f5b0a8d1cfb0b345"
            ,DrawContract: "0x04c7bac50b54f6657d0491df6ba16ad20695f03a"
            ,Team2WinContract: "0x8c1c56de5003a8286c6c3dc2aac850bb9045813d"
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
            ,Team1WinContract: "0xa823a59f052ed4e606cd434abdf24cb093f1f39f"
            ,DrawContract: "0xcdcbeda13d1fc646008fd4e9013ddc905f71befe"
            ,Team2WinContract: "0x3c14ad57aa24f06b672f04c90b6e7622ea35b6fb"
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
            ,Team1WinContract: "0x3a62446a75d20cb503e7e5606eedd4e956012c06"
            ,DrawContract: "0x627446df4c8fc4182bec8e8b54e6d77514266031"
            ,Team2WinContract: "0xa5b8fd3a54581b54d9de08718da2dc974b37b703"
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
            ,Team1WinContract: "0x6534f7bc76465c3b505ff8d97030c3973ec01103"
            ,DrawContract: "0xba43e2f15e4547b70098b6850f7b280960332d4a"
            ,Team2WinContract: "0x40062f9a69b089b84c64faf96cdf5780e80e5885"
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
            ,Team1WinContract: "0x0bb206f6c18e94f547eb941b0f3bb031958a048a"
            ,DrawContract: "0xae71018b487cb893bab718dc0f051a6a9edd261a"
            ,Team2WinContract: "0x99414e3ee92df5f755caa49dfa985d4cce4156e9"
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
            ,Team1WinContract: "0xf5ccbf56b990c4ef41d36f8afb2c40fdaedc839d"
            ,DrawContract: "0x755c5a0bc4e1a3730f3ddff1ce2b91ed572569e9"
            ,Team2WinContract: "0xdffd77a6b7cc38fe6994429b39053f59b1189a53"
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
            ,Team1WinContract: "0x71844e2941d73797e1086d4b44f1730af5e09bb8"
            ,DrawContract: "0xfb97507efd1a8f8cb2d1059acd98054e83fa951c"
            ,Team2WinContract: "0xd6763e4cbfca0d3006239c2684703e141e22687a"
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
            ,Team1WinContract: "0x57264814b8209d2067b9106170becc44290145f9"
            ,DrawContract: "0x4ad54fc39c3984ed9b48ba81e4473a7c02a2da34"
            ,Team2WinContract: "0x226f995428673a887ddcc3548fb76e611313ae3d"
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
            ,Team1WinContract: "0x4024c33071dc2b4969cc65a38251e0fdc85a3130"
            ,DrawContract: "0x4b8bdbf859f1d0ade6e236bde4be01ddd9778031"
            ,Team2WinContract: "0xdef3e5e84b241a7c0364ed47e1ed20589b1df039"
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
            ,Team1WinContract: "0x73aced696e5cd22bca8b4cfc9f48e33d625a931a"
            ,DrawContract: "0x1a3e8ec58f5f61ea4f58cf9fade7c00ece8303b4"
            ,Team2WinContract: "0x001fee0c2dd5a91c96f66ed73a393dcd9c2bd3fe"
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
            ,Team1WinContract: "0x116948aba8b91e169b3391db260a7b88ab3bfdc2"
            ,DrawContract: "0xb2d08b7bfde176b34c9df1eca82ffe8ef8622683"
            ,Team2WinContract: "0x87aea940b62905ba47f2fc9846bb3a836bd35b33"
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
            ,Team1WinContract: "0x11410a2fc70c450cfcea9975f7c9e9ddb9afb4d7"
            ,DrawContract: "0x1513ae478ae7a7ee5d274ab63723bdb3f6a1a1ae"
            ,Team2WinContract: "0x998c6bf80b5bbba9b18033b1dc7aac65ae4d6256"
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
            ,Team2WinContract: 	"0x2c5e3bbd4929408ba1632869c5539ef38aa6829e"
            ,DrawContract: 		"0xeeb8da3bab53f11c86d35660313de9f8b0dcf945"
            ,Team1WinContract: 	"0x70988d283dfab6b5ddc91e53d2b08875fb49ae75"
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
            ,Team2WinContract: 	"0x8f928c78aca9f514008bf6201d7368173ca9e67b"
            ,DrawContract: 		"0xf8267415a41f9c5b2b5acd6fcb36db07afb92992"
            ,Team1WinContract: 	"0x129c50be46c2fbb82ba8f92d0baa6cd1e9bf47bc"
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
            ,Team2WinContract: 	"0x5c49b053820b2caf0f984037556508ef8c996305"
            ,DrawContract: 		"0xef0014fe253f22487c7654a88344dcd86614ac84"
            ,Team1WinContract: 	"0x0bd9c6e18bdebd2fc90b7d0d33e095063604b97c"
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
            ,Team2WinContract: 	"0x80d0c1f9e57b552018a667363890f3d7a28b861f"
            ,DrawContract: 		"0xd19cde48b481f9f8557ed21b4981f8bd763df31a"
            ,Team1WinContract: 	"0xea0feffa2949b3aca0b12bd19df21951be46e48b"
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
            ,Team2WinContract: 	"0x8b995e3ad50cbf057eab0f118bd07303368db1f8"
            ,DrawContract: 		"0x5f7b87b70dda55216faf25c7e97778021cb635b1"
            ,Team1WinContract: 	"0x6ead7ced3397c7478e44c60d2f932d7a979db5a5"
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
            ,Team2WinContract: 	"0xcbf26a6baa01af5f7a7eb59f3d2ad0e029497b28"
            ,DrawContract: 		"0x0aaf3e6d57aa1b2eb3665059533a963a31138050"
            ,Team1WinContract: 	"0xbaee9e2658b8fcf419d14add553010c55e8e3ecf"
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
            ,Team2WinContract: 	"0x3c1a0ffa504ccccfb7f65bc0f0687a7fec26679a"
            ,DrawContract: 		"0x9c2d136b523cf2f54c2c87bb3c6787d81c6a0599"
            ,Team1WinContract: 	"0x8cabddb0bfcc7ecf815548785c22eca81ea08f2f"
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
            ,Team2WinContract: 	"0x724c828076c17be41d43596465dabf2600bef6d0"
            ,DrawContract: 		"0x83e9c6b5a175404046b115b965840aaca883e00e"
            ,Team1WinContract: 	"0x3d5c70fd99476efb8c6a5dcc4da11d3d07ca95ad"
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
            ,Team2WinContract: 	"0xf9e55a1838604849bd7bffff2b2a48239f0c49db"
            ,DrawContract: 		"0xd77c75d9ceb932867f83d909a2d07544346c5d0a"
            ,Team1WinContract: 	"0xec59814c1de8fbbe84c5e74e4819f7a31fc1f0d7"
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
            ,Team2WinContract: 	"0x79762d5490c4e24a893ee844e9509d2206cd555a"
            ,DrawContract: 		"0x2db0af62df4f6a43a5ec73e74648e1da77975b14"
            ,Team1WinContract: 	"0x71ac8ee82a4719ad6a763ed12b2937600b6cf5b2"
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
            ,Team2WinContract: 	"0x7f31ea958b16de293e5f8328e8263be9b61d6d61"
            ,DrawContract: 		"0xc06a3413292b0f5dbcf633411d212447f33d1963"
            ,Team1WinContract: 	"0x64a282eb54c0ec1b67ae0586a748b4cf420cd948"
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
            ,Team2WinContract: 	"0xdd53f8700606e0d5ad8345b6f888f7431715b7ce"
            ,DrawContract: 		"0x9fdca8f2741057890e7804f097805090fb7095c7"
            ,Team1WinContract: 	"0xf96798d3607dfce70b35f71b11ae0e88051c4135"
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
            ,Team2WinContract: 	"0x2fbe9357d45ec8208eb6637288c69dfae1810ea5"
            ,DrawContract: 		"0x50fbda27bc3cb385f59c09718da053e3e726c032"
            ,Team1WinContract: 	"0x1e815c4b8c7c87fbcbe9cffab9c92d27e8b3c4c8"
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
            ,Team2WinContract: 	"0xa92b40c22414e8c7e9602297ecce789dd03ea0a4"
            ,DrawContract: 		"0x738c4c9b080b53a9aceb8b30790c50974511d2e9"
            ,Team1WinContract: 	"0x13aeebab76b18352865cce321eaf5ee4ce4362c2"
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
            ,Team2WinContract: 	"0x33f1cfe6e655c875d7873771e3c1a7b16cd86ccb"
            ,DrawContract: 		"0xa65c773abf1597a646e7d40965815f5dc4000a87"
            ,Team1WinContract: 	"0x2c235030589bac23a3cd0f8709253407c38aa4c3"
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
            ,Team2WinContract: 	"0x8a060bb0f4b1bcd630dc4524fa19562af2bd9425"
            ,DrawContract: 		"0x933f0c645b3c80ec6a18982b459d0adb6eb1c07f"
            ,Team1WinContract: 	"0x739b5d14c7bc2563f03d15a204a1f682e9143455"
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
            ,Team2WinContract: 	"0x59a061edd8c5e2b1af32ea644551051827cb41af"
            ,DrawContract: 		"0x40ffcfa2a0c55673a5f83b23666392aeac3a40fe"
            ,Team1WinContract: 	"0x812365433445310cf2ebdb5df6d72de8d264f5a7"
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
            ,Team2WinContract: 	"0xc910d515b5fd5bf3a3eecf9515ee644aec972a92"
            ,DrawContract: 		"0x2603169ad0a0113483ed1de54ccc6ff1ba5c045d"
            ,Team1WinContract: 	"0x7118e231c30325b45529041f73cb6aaf51959fd5"
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
            ,Team2WinContract: 	"0xe49beff55be7c5a67fd0b312cf8e2be3e96a8f06"
            ,DrawContract: 		"0x1795cfd17cb370331d7be4584d6721fcddd689f7"
            ,Team1WinContract: 	"0x5a48785f2743bee7581412a56d1d888f74f78a31"
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
            ,Team2WinContract: 	"0x26ea08c393d60a24a344c9b8c3f2f0c299170e20"
            ,DrawContract: 		"0x42428f337dde6bc4c1f06ba4462ad93e9d26374f"
            ,Team1WinContract: 	"0x384aaa6bf9be8d672d496c902688182441aef2e0"
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
            ,Team2WinContract: 	"0x071681781c937c0b2e2d75c347b2d9a65144920a"
            ,DrawContract: 		"0xe3e12cb11f52d0485ca10ae1a173b7b245fefac2"
            ,Team1WinContract: 	"0xb4c65fbb93d407c46f4a8c19710ee9ffd1d71c56"
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
            ,Team2WinContract: 	"0x2b103751431050501acef275cea51811ea24276d"
            ,DrawContract: 		"0x84bd510f856328cc7c9aaa2e09cd66c601b3507f"
            ,Team1WinContract: 	"0x3222ec8615b7ceafddefbb102afb7ec273ec5fd6"
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
            ,Team2WinContract: 	"0xe170e9013b8ac3b495ba903864178ff13dd85a16"
            ,DrawContract: 		"0x9ffeaccb0a7a58a8466a9e287b3c21de77660990"
            ,Team1WinContract: 	"0x79c8272060a4b44268b18dbdeee8c7008588b4ae"
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
            ,Team2WinContract: 	"0xaec9340f40059db48a4506935c1a34e3afe700aa"
            ,DrawContract: 		"0xf34b475a3a7a5511c7c8a462ff0d2fd96513c735"
            ,Team1WinContract: 	"0xee823e9bba001d38aa85a34f3ea25af6cfe8697b"
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
            ,Team2WinContract: 	"0xd5d332b0046e8954af284058230a58ef22de6394"
            ,DrawContract: 		"0xd1e179cb35c44dde5f3ba85c41b74aeb840e7522"
            ,Team1WinContract: 	"0x394e8be8b150412a22b85304f36cfd707b668646"
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
            ,Team2WinContract: 	"0x2ccda923c9170799a87d5a12ba82a783bad37ad8"
            ,DrawContract: 		"0x2dacfd8b607461b417f584058214438489d87a78"
            ,Team1WinContract: 	"0x6a7cfa5ad314dd85c509d496d8d7f4b7992c2253"
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
            ,Team2WinContract: 	"0x82ad8c70cdc5683c990ee73867740b6432c7d78c"
            ,DrawContract: 		"0xc4fe5fad1d55ae34aaa526fae4da0ecc9d7f7727"
            ,Team1WinContract: 	"0x1bf70d3540e2f6bc0f3df7ea3101d72474e429dd"
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
            ,Team2WinContract: 	"0x159c1885d47a87dff8e0fe0517ccada9ea5e8495"
            ,DrawContract: 		"0x20c159ba3ea6896b1511b98dda5446daab75d38a"
            ,Team1WinContract: 	"0x10b38a4b5571206d5285fb358738e2a120976ff8"
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
            ,Team2WinContract: "0x91e3af0153425bf3ded93e194c9ca13bd5cdddc6"
            ,Team1WinContract: "0x1c7c9f480535f7d385d26f0318206b2aec263b47"
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
            ,Team2WinContract: "0xfa5c7e52f435026485b9592306ac63ddb388c5f2"
            ,Team1WinContract: "0x8598e02a5d57a8c831383ea7590c9afda832704f"
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
            ,Team2WinContract: "0x74989239bb018beb811621e3f63a88f05143e505"
            ,Team1WinContract: "0xef35c793879aa0ab7cbd9e4f8c082512e05a63fd"
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
            ,Team2WinContract: "0x7baa21beee64bb0ae8ace27f5395a72ea2d77a72"
            ,Team1WinContract: "0xb35f2453992792d583909cd6d0b958fa922e7e1f"
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
            ,Team2WinContract: "0xb6d09a35a57682e2f85b50b269b81637fdc4a8a7"
            ,Team1WinContract: "0x1dbd91750681cd1389945db60d14a5d7d08f6c43"
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
            ,Team2WinContract: "0x9cec01ea29131e936c32b36757dba1dedf2e4a47"
            ,Team1WinContract: "0xb8821efb39306aecacb551f95fc44a015f21423f"
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
            ,Team2WinContract: "0xe1166b26aac06014fd735be9d93df916827a6cae"
            ,Team1WinContract: "0x3e3af5ce0508bc2ce6a24ae4176d6cd69b08cef3"
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
            ,Team2WinContract: "0x8193b39add99c40d106d1c292752eb77e08fd16f"
            ,Team1WinContract: "0x12785ab43906ada326b89db0f45e595710d4cab7"
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
            ,Team2WinContract: "0x5c4d5f287819ea7494995d55945312e41ff8b1d9"
            ,Team1WinContract: "0xceb23a6371c8f4b58e74e2a4c641524a57b46b0c"
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
            ,Team2WinContract: "0xe4c19acbf807ba756ab5e5ff8eccd622864299d4"
            ,Team1WinContract: "0x8919300731584a13a34936dffc875a8c077a1c55"
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
            ,Team2WinContract: "0xcf948d6edc851e2c3539fdb43906750f456c5cdf"
            ,Team1WinContract: "0xf146d979ee64974e1a6fb70e57e593a1532049dd"
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
            ,Team2WinContract: "0xbbf8b3bb39b8175711d464e8e814d7c66e49c707"
            ,Team1WinContract: "0x79dee73ecece3d932dd3f81a2565d751197b2957"
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
            ,Team2WinContract: "0xfeea591f0cae74e9935e785820e13d77db1d5518"
            ,Team1WinContract: "0x2b98eff6dd382d6ce4df1f37fb8883c9d768531a"
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
            ,Team2WinContract: "0xce0f7c7a434a94af49249074dfe6ac7b8410b57e"
            ,Team1WinContract: "0xfdc1ef0468254be84c92fff90255fc9da2d84110"
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
            ,Team2WinContract: "0x727fdd0051e15ded6e911679e0259b0f92f8f9e9"
            ,Team1WinContract: "0x1cd6be19d3eac9fcde2181808bc7d442158d9fed"
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
            ,Team2WinContract: "0x301ee7c3cee58ac780ad2e3ceb8e5870332e140f"
            ,Team1WinContract: "0x37d9693acc9d709c797eda112000f966a02ce41d"         
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
    },
    'isShowDraw': function(gameNumber){
        if(gameNumber>48){
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
    tx: function(){
        return "moac:"+myContract+"?amount=1.1&token=MOAC&gas=150000";
    },
    clipboard: function(){
        var clipboard = new Clipboard('.btn');
    }
});

