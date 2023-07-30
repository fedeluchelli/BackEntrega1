/*      CONSIGNAS

1- debe contar con un método 'addProcuct' el cual agregará un producto
al arreglo de productos inicial (ProductManager)

    -validando que no se repita el campo "code" y que todos los campos
    sean obligatorios   //que el array no pueda quedar vacío
    -al agregarlo, debe crearse un id autoincrementable

2- debe contar con un método 'getProducts' que debe devolver el arreglo
con todos los productos creados hasta ese momento

3- debe contar con un método 'getProductsById' el cual debe buscar en el
arreglo el producto que coincida con el id

    -en caso de no coincidir con ningún id, mostrar en consola un error
    que diga "Not found"

4- entregado en formato js para ser ejecutado desde node

*/

import Product from "./Product.js";
import ProductManager from "./ProductManager.js";

// con esto se usa la función de agregar producto
// y se ingresa al array que estaba vacío
const ProdManager = new ProductManager();

// BD
// creé la clase Products para no tener que hacer 1 x 1 las características
// así solo se ponen las características que deben tener

ProdManager.agregarProducto(
  new Product("Cafetera", "Eléctrica", 3000, "./assets/img/cafe1.png", "112", 8)
);
ProdManager.agregarProducto(
  new Product("Televisor", "LED", 60000, "./assets/img/hela1.png", "456", 5)
);
ProdManager.agregarProducto(
  new Product(
    "Lámpara de Escritorio",
    "LED",
    1500,
    "./assets/img/lamp1.png",
    "101",
    20
  )
);

// definirlo previamente para agregarlo directo
const licuadora = new Product(
  "Licuadora",
  "Eléctrico",
  2500,
  "./assets/img/lic1.png",
  "789",
  15
);
const heladera = new Product(
  "Heladera",
  "Eléctrico",
  150000,
  "./assets/img/hela1.png",
  "123",
  10
);
ProdManager.agregarProducto(heladera);
ProdManager.agregarProducto(licuadora);

console.log(ProdManager.getProducts());
console.log(ProdManager.stockTotal());
