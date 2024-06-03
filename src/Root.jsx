import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FakeStoreProvider from "./services/fakeStoreProvider";

const Root = () => {
  return (
    <FakeStoreProvider>
      <Navbar />
      <Outlet />
    </FakeStoreProvider>
  );
};

export default Root;
