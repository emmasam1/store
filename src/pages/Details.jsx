import { useParams } from "react-router";
import products from "../data/data";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";

const Details = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    if (!selectedSize) {
      alert("Please select a size before proceeding.");
      return;
    }

    const message = `
      *Product Name:* ${product.product_name}
      *Size:* ${selectedSize}
      *Price:* ₦${product.price}
      *Description:* ${product.description}
      *Image Link:* ${product.image}  // You can click this link to view the product image.
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+2347063062524?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{ margin: "auto", width: "95%" }}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.product_name}
            className="w-full object-contain md:h-screen sm:h-auto" // On mobile, it will be auto-height, on medium screens (md) and above, it will be 100vh
          />
        </div>

        {/* Product Details Section */}
        <div className="pt-9 px-4">
          <h2 className="text-3xl font-bold uppercase mb-2">
            {product.product_name}
          </h2>
          <p>{product.description}</p>
          <p className="mt-3">
            <strong>Price: ₦{product.price}</strong>
          </p>

          {/* Sizes Section */}
          <div className="mt-3 flex items-center gap-3">
            <p className="font-semibold text-lg text-gray-700">Sizes:</p>
            <div className="flex flex-wrap gap-3 mt-2">
              {product.sizes &&
                product.sizes.map((size, index) => (
                  <span
                    key={index}
                    onClick={() => setSelectedSize(size)} // Set selected size on click
                    className={`text-sm font-medium px-4 py-2 border rounded-md cursor-pointer transition duration-200 ${
                      selectedSize === size
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {size}
                  </span>
                ))}
            </div>
          </div>

          {/* Social Media Icons Section */}
          <div className="flex gap-3 mt-6">
            <MdOutlineWhatsapp
              size={25}
              className="transition-transform transform hover:scale-110 hover:text-green-500 cursor-pointer"
              onClick={handleWhatsAppClick} // Trigger WhatsApp click
            />
            <FaInstagram
              size={25}
              className="transition-transform transform hover:scale-110 hover:text-pink-500 cursor-pointer"
            />
            <CgMail
              size={30}
              className="transition-transform transform hover:scale-110 hover:text-red-500 cursor-pointer"
            />
            <FaFacebook
              size={25}
              className="transition-transform transform hover:scale-110 hover:text-blue-900 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
