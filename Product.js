class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = Product.getNewId();
  }

  static getNewId() {
    if (!this.nextId) {
      this.nextId = 0;
    }
    return ++this.nextId;
  }
}

export default Product;
