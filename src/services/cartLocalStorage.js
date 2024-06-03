export default class CartLocalStorage {
  constructor() {
    this.products = this.get();
  }

  get() {
    const products = JSON.parse(localStorage.getItem("cart"));
    if (!products) return [];
    return products.map((product) => ({
      ...product,
      quantity: parseInt(product.quantity),
    }));
  }

  set() {
    localStorage.setItem("cart", JSON.stringify(this.products));
  }

  has(id) {
    const product = this.products.find((product) => product.id == id);
    if (product) return true;
    return false;
  }

  addProduct(id, quantity = 1) {
    const product = this.products.find((product) => product.id == id);
    if (product) product.quantity++;
    else {
      const product = { id, quantity };
      this.products.push(product);
    }
    this.set();
  }

  removeProduct(id) {
    this.products = this.products.filter((product) => product.id != id);
    this.set();
  }

  updateProduct(id, quantity) {
    const product = this.products.find((product) => product.id == id);
    if (product) product.quantity = quantity;
    this.set();
  }
}
