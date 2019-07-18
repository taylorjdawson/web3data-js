const {get, is} = require('./utils')
const {
  BLOCKS_ENDPOINT: ENDPOINT,
  ERROR_MESSAGE_BLOCK_NO_NUMBER: NO_BLOCK_NUMBER
} = require('./constants')

class Block {
  constructor(web3data) {
    this.web3data = web3data
  }

  getTokenTransfers(blocknumber, filterOptions) {
    if (is.undefined(blocknumber))
      return Promise.reject(new Error(NO_BLOCK_NUMBER))
    return get(this.web3data, {
      pathParam: blocknumber,
      endpoint: ENDPOINT,
      subendpoint: 'token-transfers',
      filterOptions
    })
  }
}

module.exports = Block