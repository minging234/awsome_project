class Witness {
    constructor (verifier, hashValue, previousHash, signTime) {
        this.verifier = verifier;
        this.hashValue = hashValue;
        this.previousHash = previousHash;
        this.signTime = signTime;
    }
}

module.exports = Witness;