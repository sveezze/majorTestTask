export class RequestMadeModel {
    public requestDate: Date;
    public adress: string;
    public amount: number;
    public productsToBuy: string;
  
    constructor(requestDate: Date, adress: string, amount: number, productsToBuy: string) {
      this.requestDate = requestDate;
      this.adress = adress;
      this.amount = amount;
      this.productsToBuy = productsToBuy;
    }
  }