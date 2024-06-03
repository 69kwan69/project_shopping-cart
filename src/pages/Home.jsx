import Button from "../components/Button";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div className="mt-20 grid min-h-full justify-items-center gap-2 p-6 md:grid-cols-[55%_1fr] lg:px-36">
      <div className="mb-6 flex flex-col text-center md:self-end md:justify-self-start md:text-left">
        <h1 className="mb-4 text-4xl font-light md:order-1 md:text-6xl">
          discover your <br />
          <span className="font-bold"> Perfect Product!</span>
        </h1>
        <p className="font-bold uppercase tracking-wide text-zinc-500">
          fakestore present
        </p>
      </div>

      <img
        src={hero}
        alt="Jahy-sama go shopping"
        className="row-span-2 w-3/4 md:w-full md:justify-self-end"
      />

      <Button
        className={
          "mt-[-1rem] w-full gap-4 bg-black text-white sm:w-auto md:mt-0 md:self-start md:justify-self-start"
        }
        text={"SHOP NOW"}
        icon={"arrow_forward"}
        link={"/explore"}
      />
    </div>
  );
};

export default Home;
