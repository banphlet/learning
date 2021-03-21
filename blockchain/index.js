'use strict'

const crypto = require('crypto')

let nonce = 0

const calculateNewHash = ({ timeStamp, data, previousHash = '' }) =>
  crypto
    .createHash('SHA256')
    .update(
      Buffer.from(timeStamp + JSON.stringify(data) + previousHash + nonce)
    )
    .digest('hex')

const generateNewBlock = ({ timeStamp, data, previousHash = '' }) => {
  return {
    timeStamp,
    data,
    previousHash,
    hash: calculateNewHash({
      timeStamp,
      data,
      previousHash
    })
  }
}

const mineBlock = difficulty => block => {
  while (
    block.hash.substring(0, difficulty) !==
    Array.from({ length: difficulty + 1 }).join('0')
  ) {
    nonce++
    block.hash = calculateNewHash(block)
  }
  console.log('mined block, ', block.hash)
  return block
}

const createGenesisBlock = () =>
  generateNewBlock({ index: 0, timeStamp: new Date(), data: 'Genesis Block' })

const blockChain = (difficulty = 2) => {
  const chain = [createGenesisBlock()]

  const getLastBlock = () => chain[chain.length - 1]

  const addBlock = newBlock => {
    newBlock.previousHash = getLastBlock().hash
    const minedBlock = mineBlock(difficulty)(newBlock)
    chain.push(minedBlock)
  }

  const isChainValid = () => {
    for (let i = 1; i < chain.length; i++) {
      const currentBlock = chain[i]
      const previousBlock = chain[i - 1]
      return (
        currentBlock.hash === calculateNewHash(currentBlock) &&
        currentBlock.previousHash === previousBlock.hash
      )
    }
  }

  return {
    chain,
    addBlock,
    isChainValid
  }
}

const newCoin = blockChain(2)
console.log('mining block 1.....')
newCoin.addBlock(
  generateNewBlock({ timeStamp: new Date(), data: { amount: 100 } })
)
console.log('mining block 2.....')

newCoin.addBlock(
  generateNewBlock({ timeStamp: new Date(), data: { amount: 500 } })
)
console.log('mining block 3.....')
newCoin.addBlock(
  generateNewBlock({ timeStamp: new Date(), data: { amount: 900 } })
)
// newCoin.chain[1].data = { amount: 1000000 }

console.log(newCoin.chain, newCoin.isChainValid())
