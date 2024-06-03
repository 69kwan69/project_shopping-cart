import { useContext, useState } from "react";
import fumo from "../assets/fumo.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { FakeStore } from "../services/fakeStoreProvider";

const Cart = () => {
  const { getCart, removeProductFromCart, updateProduct } =
    useContext(FakeStore);

  return (
    <div className="flex min-h-dvh flex-col justify-center pt-20 lg:p-36 lg:pb-10">
      {getCart().length > 0 ? (
        <>
          <table className="w-full">
            <thead>
              <tr className="hidden bg-black text-white *:p-6 sm:table-row">
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getCart().map(({ id, title, price, image, quantity }) => (
                <tr key={id} className="*:p-6 even:bg-gray-100">
                  <td>
                    <Link to={`/explore/${id}`}>
                      <img
                        src={image}
                        alt={title}
                        className="z-[-1] max-w-16 object-cover mix-blend-darken"
                      />
                    </Link>
                  </td>
                  <td className="font-bold">
                    <Link
                      to={`/explore/${id}`}
                      className="text-sm font-semibold text-gray-600 decoration-1 hover:underline sm:text-base"
                    >
                      {title}
                    </Link>
                    <p className="text-xl font-bold sm:hidden">
                      ${(parseFloat(price) * parseInt(quantity)).toFixed(2)}
                    </p>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      defaultValue={quantity}
                      className="w-[6ch] bg-inherit text-right font-bold"
                      min={1}
                      onChange={(e) =>
                        updateProduct(id, parseInt(e.currentTarget.value))
                      }
                    />
                  </td>
                  <td className="hidden text-right text-xl font-bold sm:table-cell">
                    ${(parseFloat(price) * parseInt(quantity)).toFixed(2)}
                  </td>
                  <td>
                    <button
                      className="group grid w-full place-items-center"
                      onClick={() => removeProductFromCart(id)}
                    >
                      <span className="material-symbols-outlined group-hover:[filled] group-hover:text-red-600">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center gap-6 p-6 *:flex-1 sm:justify-end sm:gap-10 sm:*:flex-none">
            <Button
              text={"Checkout"}
              icon={"arrow_forward"}
              link={"/checkout"}
            />
            <div className="text-right">
              <p className="font-semibold text-gray-600">total</p>
              <p className="text-2xl font-bold">
                $
                {getCart()
                  .reduce(
                    (total, { price, quantity }) =>
                      total + parseFloat(price) * parseInt(quantity),
                    0,
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-10 p-6 sm:flex-none sm:flex-row sm:*:flex-1">
          <div className="flex w-36 items-center justify-center">
            <img src={fumo} alt="fumo" className="w-32 object-contain" />
          </div>
          <div className="flex w-full flex-col gap-6 sm:items-start">
            <p className="text-center text-3xl ">
              It's <span className="font-bold">empty</span> here.
            </p>
            <Button
              text={"Go shopping now"}
              icon={"arrow_forward"}
              className={"w-full sm:w-auto"}
              link={"/explore"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
