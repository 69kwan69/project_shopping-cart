import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import tohru from "../assets/tohru.png";

import { Form } from "react-router-dom";
import { useContext } from "react";
import { FakeStore } from "../services/fakeStoreProvider";

const Explore = () => {
  const { products } = useContext(FakeStore);

  return (
    <div className="mt-20 p-6 lg:px-36">
      <Form action="#" className="sm:p-6" role="search">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 space-x-0 rounded-full border p-2 shadow has-[:focus]:outline has-[:focus]:outline-2">
          <span className="material-symbols-outlined mx-2">search</span>
          <input
            type="text"
            placeholder="Sneaker..."
            name="q"
            className="w-full focus-visible:outline-none"
            aria-label="Search products"
          />
          <Button
            className={
              "flex items-center justify-center gap-2 !rounded-full bg-black px-4 py-2 text-white"
            }
            text={"filter"}
            icon={"keyboard_arrow_down"}
          />
        </div>
      </Form>
      {true ? (
        <div className="mt-6 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.map(({ id, title, price, image }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
            />
          ))}
        </div>
      ) : (
        <div className="flex w-auto flex-col items-center justify-center gap-4 p-6 pb-0 sm:flex-row">
          <p className="text-center text-2xl sm:ml-10 sm:mt-10 sm:self-start sm:text-left">
            sorry, item
            <br />
            <span className="text-3xl font-bold">not found.</span>
          </p>
          <img src={tohru} alt="Tohru shrug" className="block max-w-80" />
        </div>
      )}
    </div>
  );
};

export default Explore;
