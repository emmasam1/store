import Cards from "./Cards";
import products from "../data/data";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative top-20">
        <Cards products={products} />
      </div>
    </>
  );
};

export default Home;
