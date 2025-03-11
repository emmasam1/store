import { Route, Routes } from "react-router";
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
