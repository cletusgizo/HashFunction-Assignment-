const Block = require('./sha256hash')
const block1 = new Block(1, Date.now(), "awoke Zememu","0xORTI040T40G4004T0")

console.log(block1.calculateHash())