import { createContext } from "react";
import { getProducts } from "./fakeStoreAPI";
import { useState, useEffect } from "react";
import CartLocalStorage from "./cartLocalStorage";

export const FakeStore = createContext();

export default function FakeStoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(new CartLocalStorage().get());

  const cartLS = new CartLocalStorage();

  const getProductByID = (id) => {
    return products.find((product) => product.id == id);
  };

  const getCart = () => {
    return cartLS.get().map(({ id, quantity }) => {
      const product = getProductByID(id);
      return { ...product, quantity };
    });
  };

  const addProductToCart = (id, quantity) => {
    cartLS.addProduct(id, quantity);
    setCart(cartLS.get());
  };

  const removeProductFromCart = (id) => {
    console.log("cool");
    cartLS.removeProduct(id);
    setCart(cartLS.get());
  };

  const checkCartHas = (id) => {
    return cartLS.has(id);
  };

  const updateProduct = (id, quantity) => {
    cartLS.updateProduct(id, quantity);
    setCart(cartLS.get());
  };

  useEffect(() => {
    (async () => {
      setProducts(await getProducts());
    })();
  }, []);

  return (
    <FakeStore.Provider
      value={{
        products,
        cart,
        getCart,
        getProductByID,
        addProductToCart,
        removeProductFromCart,
        updateProduct,
        checkCartHas,
      }}
    >
      {children}
    </FakeStore.Provider>
  );
}
