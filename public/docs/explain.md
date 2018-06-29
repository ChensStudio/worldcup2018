### MOAC dApp Explained

This is a show case of how MOAC ([https://moac.io](https://moac.io)) smart contracts work.

* Open source

   Github Link: [https://github.com/biajee/moacworldcup2018](https://github.com/biajee/moacworldcup2018)

* MOAC smart contracts
  
  1. Main Worldcup Contract: 
      * Deployed: [http://explorer.moac.io/addr/0x8671eb9f82218199e5ce0acab2d31b2e5e281491](http://explorer.moac.io/addr/0x8671eb9f82218199e5ce0acab2d31b2e5e281491)
      * Contract code: [WorldcupFun.sol](https://github.com/biajee/moacworldcup2018/blob/master/solidity/WorldcupFun.sol)
  2. Contract for each match:
      * Deployed: too many! total of 176 contracts.
      * Contract code: [Match.sol](https://github.com/biajee/moacworldcup2018/blob/master/solidity/Match.sol)
  3. Contract for the champion:
      * Deployed: too many! total of 32 contracts.
      * Contract code: [Champion.sol](https://github.com/biajee/moacworldcup2018/blob/master/solidity/Champion.sol)

* Philosophy explained
  * Total decentralized application: all critical dynamic information are stored in the main MOAC contract. No hidden data at all. This also makes the website much more secured.
  * Easy for layman users: we created many contracts so that layman users do not need to input any contract calling data.
  * Easy for dApp users: with the use of QR codes, users do not need to install metamask. All users needed is to have a TokenPocket ([https://www.mytokenpocket.vip](https://www.mytokenpocket.vip)) wallet.
  * Security: no user login, data control or access control is needed at website. One can even print the qr codes out for people to use.

   


