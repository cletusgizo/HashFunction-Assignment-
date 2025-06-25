const {keccak256} = require("ethereum-cryptography/keccak")
const {toHex, utf8ToBytes} = require("ethereum-cryptography/utils")

function hashMessage(message){
    return toHex(keccak256(utf8ToBytes(message)))
    
}

console.log(hashMessage("keccak256 and function"))