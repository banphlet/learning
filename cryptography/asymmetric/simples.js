'use strict'
const { PerformanceObserver, performance } = require('perf_hooks')
const alphabets = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'

const alphabetsList = alphabets.split(',')
function caesarCipher (cipherRound = 3) {
  // caesar cipher

  function encrypt (plainText = '') {
    const getRightIndex = index => {
      const newIndex = index + cipherRound
      if (newIndex >= alphabetsList.length) {
        return newIndex - alphabetsList.length
      }
      return newIndex
    }
    let cipher = ''

    for (const iterator of plainText) {
      const indexOf = alphabetsList.indexOf(iterator)
      const newIndex = getRightIndex(indexOf)
      const letter = alphabetsList[newIndex]
      cipher += letter
    }
    return cipher
  }

  function decrypt (cipher = '') {
    const getRightIndex = index => {
      const newIndex = index - cipherRound
      if (newIndex < 0) {
        return newIndex + alphabetsList.length
      }
      return newIndex
    }
    let plainText = ''

    for (const iterator of cipher) {
      const indexOf = alphabetsList.indexOf(iterator)
      const newIndex = getRightIndex(indexOf)
      const letter = alphabetsList[newIndex]
      plainText += letter
    }
    return plainText
  }

  return {
    encrypt,
    decrypt
  }
}

function vigenereCipher () {
  let keyIndex = 0
  const findKey = (keysIndex = []) => () => {
    if (keyIndex <= keysIndex.length - 1) {
      keyIndex++
    } else {
      keyIndex = 1
    }
    return keysIndex[keyIndex - 1]
  }

  function encrypt ({ plainText = '', key = '' }) {
    const formKeyIndex = key
      .split('')
      .map(cipherKey => alphabetsList.indexOf(cipherKey))
    const generateCipherKey = findKey(formKeyIndex)
    let cipher = ''
    for (const iterator of plainText) {
      cipher += /\s/gi.test(iterator)
        ? iterator
        : caesarCipher(generateCipherKey()).encrypt(iterator)
      console.log(iterator, generateCipherKey())
    }
    return cipher
  }

  function decrypt ({ cipher = '', key = '' }) {
    const formKeyIndex = key
      .split('')
      .map(cipherKey => alphabetsList.indexOf(cipherKey))
    const generateCipherKey = findKey(formKeyIndex)
    let plainText = ''
    for (const iterator of cipher) {
      plainText += /\s/gi.test(iterator)
        ? iterator
        : caesarCipher(generateCipherKey()).decrypt(iterator)
    }

    return plainText
  }

  return {
    encrypt,
    decrypt
  }
}

function factorial (n) {
  return Array.from({ length: n }).reduce((acc, _, index) => {
    acc *= n - index
    return acc
  }, 1)
}

const computeRuntime = fn => {
  const obs = new PerformanceObserver(items => {
    console.log(items.getEntries()[0].duration / 1000)
    performance.clearMarks()
  })
  obs.observe({ entryTypes: ['measure'] })
  performance.mark('A')
  fn()
  performance.measure('A to Now', 'A')
  performance.mark('B')
  performance.measure('A to B', 'A', 'B')
}

console.log(computeRuntime(() => factorial(4)))
