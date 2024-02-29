export class ProductsToBuyModel {
    public productsToBuy: string;
    public priceOfP2B: number;
  
    constructor(productsToBuy: string, priceOfP2B: number) {
      this.productsToBuy = productsToBuy;
      this.priceOfP2B = priceOfP2B;
    }
  }