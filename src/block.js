const {get, is} = require('./utils')
const {
  BLOCKS_ENDPOINT: ENDPOINT,
  ERROR_MESSAGE_BLOCK_NO_ID: NO_BLOCK_ID
} = require('./constants')

class Block {
  constructor(web3data) {
    this.web3data = web3data
  }

  getTokenTransfers(id, filterOptions) {
    if (is.undefined(id)) return Promise.reject(new Error(NO_BLOCK_ID))
    return get(this.web3data, {
      pathParam: id,
      endpoint: ENDPOINT,
      subendpoint: 'token-transfers',
      filterOptions
    })
  }

  async getBlock(id, filterOptions) {
    if (is.undefined(id)) return Promise.reject(new Error(NO_BLOCK_ID))
    const response = await get(this.web3data, {
      pathParam: id,
      endpoint: ENDPOINT,
      filterOptions
    })
    return new Promise((resolve, reject) => {
      if (!response || response.status !== 200 || !response.payload) {
        reject(new Error(`error with request`))
      } else {
        resolve(response.payload)
      }
    })
  }

  async getBlockNumber() {
    const block = await this.getBlock('latest')
    return new Promise((resolve, reject) => {
      if (!block | !block.number) {
        reject(new Error('There was an error with the request'))
      } else {
        resolve(parseInt(block.number, 10))
      }
    })
  }

  async getBlockTransactionCount(id) {
    const block = await this.getBlock(id)
    return new Promise((resolve, reject) => {
      if (!block || (!block.predictions && !block.numTransactions)) {
        reject(new Error(`There was an error with the request`))
      } else if (block.predictions) {
        resolve(null)
      } else {
        resolve(parseInt(block.numTransactions, 10))
      }
    })
  }

  async getTransactions(id, filterOptions) {
    const response = await get(this.web3data, {
      pathParam: id,
      endpoint: ENDPOINT,
      subendpoint: 'transactions',
      filterOptions
    })
    return new Promise((resolve, reject) => {
      if (
        !response ||
        response.status !== 200 ||
        !response.payload ||
        !response.payload.records
      ) {
        reject(new Error('There was an error with the request'))
      } else {
        resolve(response.payload.records)
      }
    })
  }

  async getTransactionFromBlock(id, index) {
    const transactions = await this.getTransactions(id)
    return new Promise((resolve, reject) => {
      if (!transactions) {
        reject(new Error(`There was an error with the request`))
      } else if (index < transactions.length && index > -1) {
        resolve(transactions[index])
      } else {
        resolve(null)
      }
    })
  }

  async getUncle(id, index) {
    const block = await this.getBlock(id, {validationMethod: 'full'})
    return new Promise((resolve, reject) => {
      if (
        !block ||
        (!block.predictions && !block.numTransactions && !block.validation)
      ) {
        reject(new Error(`There was an error with the request`))
      } else if (block.predictions || !block.validation.uncles) {
        resolve(null)
      } else if (index < block.validation.uncles.length && index > -1) {
        resolve(block.validation.uncles[index])
      } else {
        resolve(null)
      }
    })
  }
}

module.exports = Block
