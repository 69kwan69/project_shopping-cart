import smoking from "../assets/smoking.png";

const Checkout = () => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center pt-20 sm:flex-row">
      <p className="text-center text-2xl sm:ml-20 sm:mt-20 sm:self-start sm:text-left">
        sorry, cannot
        <br />
        <span className="text-3xl font-bold">checkout yet.</span>
      </p>
      <img src={smoking} alt="Loli smoking" />
    </div>
  );
};

export default Checkout;
