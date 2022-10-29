import { atom } from 'recoil'
import { initHistoricalPrice } from '../../model'

export const historicalPriceState = atom({
 key: 'historicalPriceState', //this must be unique
 default: initHistoricalPrice(),
})