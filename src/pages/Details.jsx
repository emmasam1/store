import { useParams } from "react-router";
import axios from "axios";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Spin } from 'antd';

const Details = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productUrl = `https://store-server-6lv5.onrender.com/api/product/${id}`;
      try {
        const response = await axios.get(productUrl);
        if (response.status === 200) {
          setProduct(response.data);
          setLoading(false); 
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Spin size="large" tip="Loading..." />
  </div>; // Show a loading message or spinner
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleWhatsAppClick = () => {
    if (!selectedSize) {
      alert("Please select a size before proceeding.");
      return;
    }

    const message = `
      *Product Name:* ${product.productName}
      *Size:* ${selectedSize}
      *Price:* ₦${product.price}
      *Description:* ${product.description}
      *Image Link:* ${product.imageUrl}
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
            src={product.imageUrl}
            alt={product.productName}
            className="w-full object-contain md:h-screen sm:h-auto"
          />
        </div>

        {/* Product Details Section */}
        <div className="pt-9 px-4">
          <h2 className="text-3xl font-bold uppercase mb-2">
            {product.productName}
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
                    className={`text-sm font-medium px-4 py-2 border rounded-md cursor-pointer transition duration-200 uppercase ${
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
              onClick={handleWhatsAppClick}
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
