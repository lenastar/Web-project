export class Client {
  public name: string;
  public products: Array<Product>;

  constructor(name: string, products: Array<Product>) {
    this.name = name;
    this.products = products;
  }
}

export class Product {
  public name: string;
  public imagePath: string;
  public cost: number;

  constructor(name: string, imagePath: string, cost: number) {
    this.name = name;
    this.imagePath = imagePath;
    this.cost = cost;
  }
}
