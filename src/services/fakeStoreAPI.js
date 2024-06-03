const URL = "https://fakestoreapi.com";

export async function getProduct(id) {
  const res = await fetch(`${URL}/products/${id}`);
  const product = await res.json();
  return product;
}

export async function getProducts(keyword) {
  const res = await fetch(`${URL}/products`);
  let products = await res.json();
  if (keyword) {
    products = products.filter(({ title }) =>
      title.toLowerCase().includes(keyword.toLowerCase()),
    );
  }
  return products;
}
