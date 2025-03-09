import { useParams } from "react-router";
import products from "../data/data";

import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";

const Details = () => {
  const { id } = useParams(); // Get the id from the URL
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>; // Handle case when the product is not found
  }

  return (
    <div style={{ margin: "auto", width: "95%" }}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div>
          <img src={product.image} alt={product.product_name} className=""/>
        </div>
        <div className="pt-9">
          <h2 className="text-3xl font-bold uppercase mb-2">
            {product.product_name}
          </h2>
          <p>{product.description}</p>
          <p className="mt-3">
            <strong>Price: ${product.price}</strong>
          </p>

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
