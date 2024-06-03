import { Link } from "react-router-dom";
import { useContext } from "react";
import { FakeStore } from "../services/fakeStoreProvider";

const ProductCard = ({ id, title, price, image }) => {
  const { addProductToCart, removeProductFromCart, checkCartHas } =
    useContext(FakeStore);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-gray-200 shadow transition *:p-4 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-auto rounded-lg bg-white">
        <Link to={`${id}`}>
          <img
            src={image}
            alt={title}
            className="aspect-square w-full object-contain"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-between font-bold">
        <Link to={`${id}`} className="group">
          <p className="mb-4 line-clamp-2 decoration-1 group-hover:underline">
            {title}
          </p>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-2xl">${price}</p>
          {checkCartHas(id) ? (
            <button
              className="grid place-items-center"
              onClick={() => removeProductFromCart(id)}
            >
              <span className="material-symbols-outlined filled">
                shopping_cart
              </span>
            </button>
          ) : (
            <button
              className="grid place-items-center"
              onClick={() => addProductToCart(id, 1)}
            >
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
