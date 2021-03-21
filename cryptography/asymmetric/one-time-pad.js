'use strict'
/**
 * C = CIPHER
 * P= PLAINTEXT
 * K = KEY
 * ^ = XOR = Exclusive OR
 *
 *  Encryption
 * C = P ^ K
 *
 * Decryption
 * P = C ^ K
 */

const key = 0b10110100
const plainText = 0b01101101

const cipher = plainText ^ key

const decryptedPlainText = (cipher ^ key).toString(2)

console.log(decryptedPlainText)
