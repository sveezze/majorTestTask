export class ProductsToBuyModel {
    public productsToBuy: string;
    public priceOfP2B: number;
    public amount: number;
  
    constructor(productsToBuy: string, priceOfP2B: number, amount: number) {
      this.productsToBuy = productsToBuy;
      this.priceOfP2B = priceOfP2B;
      this.amount = amount;
    }
  }