import { Outlet } from "react-router-dom";
import NavBar from "./components-reusable/navBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
