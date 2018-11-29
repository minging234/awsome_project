class Block {
    constructor (index, version, previousHash, previousVerf, timestamp, data, witness, hash) {
      this.index = index;
      this.version = version;
      this.previousHash = previousHash;
      this.previousVerf = previousVerf;
      this.timestamp = timestamp;
      this.data = data;
      this.witness = witness;
      this.hash = hash;
    }
  
    static get genesis() {
      return new Block(
        0,
        0,
        "0",
        "",
        1508270000000,
        "Welcome to DG system!",
        "",
        "000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920261d8109b37cf"
      );
    }
  }
  
  module.exports = Block;