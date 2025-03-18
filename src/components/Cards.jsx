import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spin } from "antd";
const { Meta } = Card;
import { useNavigate } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import { Rings } from "react-loader-spinner";

const contentStyle = {
  padding: 50,
  // background: 'rgba(0, 0, 0, 1)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const Cards = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);

    const viewProductUrl = `https://store-server-6lv5.onrender.com/api/product/view/${id}`;
    axios
      .get(viewProductUrl)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error incrementing product views:", error);
      });
  };

  const getProduct = async () => {
    const productsUrl = `https://store-server-6lv5.onrender.com/api/product`;
    try {
      const response = await axios.get(productsUrl);
      if (response.status === 200) {
        setProducts(response.data);
        setLoading(false);
      }
      console.log(response);
    } catch (error) {
      console.log("Error fetching products:", error);
      if (error.response) {
        console.log("Server Error:", error.response);
      } else if (error.request) {
        console.log("Network Error:", error.request);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [products]);

  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
        {loading ? (
          <div className="flex justify-center items-center h-80 m-auto absolute w-[90%]">
            <div className="flex justify-center items-center h-80 m-auto absolute w-[85%]">
              <Spin tip="Loading">{content}</Spin>
            </div>
          </div>
        ) : (
          products.map((product) => (
            <Card
              key={product._id}
              hoverable
              cover={
                <img
                  alt={product.productName}
                  src={product.imageUrl}
                  style={{
                    height: "150px",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              }
              onClick={() => handleCardClick(product._id)}
              className="w-full"
            >
              <Meta
                title={product.productName}
                description={`Price: ₦${product.price}`}
              />
              <div className="flex items-center gap-2 mt-2">
                <p className="text-gray-500">Views: {product.views}</p>
                <IoEyeOutline />
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
