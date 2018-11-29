const Block = require("./Block.js");
const Witness = require("./Witness.js");
const crypto = require("crypto");

DATA_LEN = 10;
WITNESS_LIST_LEN = 5;

class Blockchain {
  constructor() {
    this.blockchain = [Block.genesis];
    this.blockchain[0].data = "cert";

    this.dataCache = "";
    this.curData = "";

    this.witnessQue = [];
    this.curWitnessList = [];
  }

  get() {
    return this.blockchain;
  }

  get latestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  calculateHashForBlock(block) {
    const { index, previousHash, timestamp, data, nonce } = block;
    return this.calculateHash(
      index,
      previousHash,
      timestamp,
      data,
      nonce
    );
  }

  calculateHash(index, previousHash, timestamp, data, nonce) {
    return crypto
      .createHash("sha256")
      .update(index + previousHash + timestamp + data + nonce)
      .digest("hex");
  }

  // here my version start


  addData(data) {
    this.dataCache += data;
    var len = DATA_LEN - this.curData.length;

    if (this.dataCache.length >= len) {
      this.curData += this.dataCache.substr(0, len);
      this.dataCache = this.dataCache.substr(len, this.dataCache.length - len);
    } else {
      this.curData += this.dataCache;
      this.dataCache = "";
    }

    this.publishBlock();
  }

  addWitness(witness) {
    this.witnessQue.push(witness);
    var len = WITNESS_LIST_LEN - this.curWitnessList;

    if (this.curWitnessList.length >= len) {
      for (var i = 0; i < len; i++) {
        this.curWitnessList.push(this.witnessQue.shift());
      }
    } else {
      for (var i = 0; i < this.witnessQue.length; i++) {
        this.curWitnessList.push(this.witnessQue.shift());
      }
    }

    this.publishBlock();
  }
  

  publishBlock(){
    if (this.curData.length < DATA_LEN && this.curWitnessList.length < WITNESS_LIST_LEN) {
      return;
    }
    const newBlock = this.generateNextBlock(this.curData, this.curWitnessList);
    this.addBlock(newBlock);
  }

  generateNextBlock(data, witnessList) {

  }

  addBlock(newBlock) {

  }

}

module.exports = Blockchain;
