// hash function with sha256 in blockchain network
const {SHA256} = require("crypto-js")


class Block{
    constructor(index, timestamp, data, previoushash){
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previoushash = previoushash
        this.hash - this.calculateHash()
    }

    calculateHash(){
        return SHA256(this.index+this.timestamp+this.data+this.previoushash).toString()
    }
}


module.exports = Block