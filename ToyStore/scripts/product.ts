export class Product {
  constructor(public id: number, public name: string,
    public price: number, public description: string) { }

  get priceInclVAT() {
    const VAT = 1.21;
    return this.price * VAT;
  }
}