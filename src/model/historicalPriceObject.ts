export interface historicalPriceObject {
    price: number
  }

  export const initHistoricalPrice = (): historicalPriceObject => ({
    price: 0,
  })