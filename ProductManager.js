class ProductManager {
  static products = [];

  agregarProducto(product) {
    let productoCompleto = true;

    const errorCarga = "Error en la carga";

    if (!this.isProductComplete(product)) {
      console.error(errorCarga);
      productoCompleto = false;
    }

    if (this.getProductByCode(product.code)) {
      console.error(errorCarga);
      productoCompleto = false;
    }

    if (!productoCompleto) {
      console.error(errorCarga);
      return;
    }

    ProductManager.products.push(product);
  }
  stockTotal() {
    let totalStock = 0;
    for (const product of ProductManager.products) {
      totalStock += product.stock;
    }
    return totalStock;
  }
  getProducts() {
    return ProductManager.products;
  }

  getProductById(id) {
    const product = ProductManager.products.find(
      (product) => product.id === id
    );
    if (!product) {
      console.error("Not found");
    }
    return product;
  }

  getProductByCode(code) {
    const product = ProductManager.products.find(
      (product) => product.code === code
    );
    return product;
  }

  isProductComplete(product) {
    for (const prop in product) {
      if (!product[prop]) {
        return false;
      }
    }
    return true;
  }
}

export default ProductManager;
