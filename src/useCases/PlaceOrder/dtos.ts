export class PlaceOrderInput {
  cpf: string;
  zipcode: string;
  items: { sku: string, quantity: number }[];
  coupon?: string;

  constructor({ cpf, zipcode, items, coupon }: { cpf: string, zipcode: string, items: any, coupon?: string }) {
    this.cpf = cpf;
    this.zipcode = zipcode;
    this.items = items;
    this.coupon = coupon;
  }
}

export class PlaceOrderOutput {
  freight: number;
  total: number;

  constructor({ freight, total }: { freight: number, total: number }) {
    this.freight = freight;
    this.total = total;
  }
}
