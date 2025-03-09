import { Route, Routes } from "react-router"; // Notice we are using react-router-dom
import Home from "./components/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
