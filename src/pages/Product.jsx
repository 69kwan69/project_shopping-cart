import Button from "../components/Button";
import { useLoaderData } from "react-router-dom";
import { getProduct } from "../services/fakeStoreAPI";
import CartLocalStorage from "../services/cartLocalStorage";

export async function loader({ params }) {
  const product = await getProduct(params.id);
  return product;
}

const Product = () => {
  const { id, title, price, description, category, image } = useLoaderData();

  return (
    <div
      className={`mt-20 grid gap-6 [grid-template-areas:'image''title''information''buttons'] md:grid-cols-2 md:p-6 md:[grid-template-areas:'title_title''image_information'] lg:gap-10 lg:px-36 lg:py-10`}
    >
      <div className="rounded-b-lg border p-6 shadow [grid-area:image] md:rounded-lg">
        <img
          src={image}
          alt={title}
          className="block max-h-60 w-full object-contain"
        />
      </div>

      <div className="flex justify-between gap-10 px-6 [grid-area:title] md:p-0">
        <div>
          <span className="text-sm uppercase tracking-wider text-gray-500">
            {category}
          </span>
          <h1 className="text-xl font-bold lg:text-2xl">{title}</h1>
        </div>
        <div className="text-right font-bold">
          <p className="text-gray-500">from</p>
          <p className="text-3xl lg:text-4xl">${price}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-10 px-6 text-gray-700 [grid-area:information] md:p-0">
        <p>{description}</p>
        <div className="flex gap-6 *:flex-1">
          <Button text={"Buy Now"} icon={"arrow_forward"} link="/checkout" />
          <Button
            className={"border-2 border-black bg-white !text-black"}
            text={"Add to Cart"}
            icon={"shopping_cart"}
            onClick={() => {
              const cart = new CartLocalStorage();
              cart.addProduct(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
