import test from "ava"
import { getNewWeb3DataInstance, TX_HASH, ADDRESS } from './constants'

import {ERROR_MESSAGE_TRANSACTION_NO_HASH as NO_HASH} from "../src/constants";
import {setUpPolly} from "./utils";

/**********************************
 * -------- Tests Setup ---------- *
 **********************************/
test.before(t => {
    t.context.polly = setUpPolly('transaction')
})

test.after(async t => {
    await t.context.polly.stop()
})

test.beforeEach(t => {
    t.context.web3data = getNewWeb3DataInstance()
})

/**
 * Test that method is called and returns successfully, i.e. a status of 200
 * @param t the test object
 * @param method
 */
const statusSuccess = async (t, { method, params = {} }) => {
    const response = await t.context.web3data.transaction[method]()
    t.is(response.status, 200)
}
statusSuccess.title = (providedTitle = '', input) =>  `Successfully calls ${input.method} and returns status of 200`

const returnsString = async (t, { method, params = {} }) => {
    const response = await t.context.web3data.transaction[method]()
    t.is(typeof response, 'string')
    t.is(typeof parseInt(response), 'number')
}
returnsString.title = (providedTitle = '', input) => `Successfully calls ${input.method} and returns string value`

test([statusSuccess], {method:'getGasPrediction'})
test([returnsString], {method:'getGasPrice'})

// test([statusSuccess, rejectsPromise], {method: 'getTokenVolume'}, NO_ADDRESS)

