import { useParams } from "react-router";
import products from "../data/data";

import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ margin: "auto", width: "95%" }}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="100vh">
          <img src={product.image} alt={product.product_name} className="h-screen"/>
        </div>
        <div className="pt-9">
          <h2 className="text-3xl font-bold uppercase mb-2">
            {product.product_name}
          </h2>
          <p>{product.description}</p>
          <p className="mt-3">
            <strong>Price: ${product.price}</strong>
          </p>

          <div className="mt-3 flex gap-2 items-center">
              <p className="font-semibold text-gray-700">Sizes:</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes && product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium px-2 py-1 border-gray-200 cursor-pointer bg-gray-100"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

          <div className="flex gap-3 mt-3">
            <MdOutlineWhatsapp
              size={25}
              className="transition-transform transform hover:scale-110 hover:text-green-500 cursor-pointer"
            />
            <FaInstagram
              size={25}
              className="transition-transform transform hover:scale-110 hover:text-pink-500 cursor-pointer"
            />
            <CgMail
              size={30}
              className="transition-transform transform hover:scale-110 hover:text-red-500 cursor-pointer"
            />
            <FaFacebook size={25} 
                className="transition-transform transform hover:scale-110 hover:text-blue-900 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
