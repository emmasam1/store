import { Card } from "antd";
const { Meta } = Card;
import { useNavigate } from "react-router";
import products from "../data/data";
import { IoEyeOutline } from "react-icons/io5";

const Cards = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            hoverable
            cover={
              <img
                alt={product.product_name}
                src={product.image}
                style={{
                  height: "150px",  // Fixed height
                  objectFit: "contain",  // Ensures image covers the area
                  objectPosition: "center",  // Centers the image
                }}
              />
            }
            onClick={() => handleCardClick(product.id)}
            className="w-full"
          >
            <Meta
              title={product.product_name}
              description={`Price: ₦${product.price}`}
            />
            <div className="flex items-center gap-2 mt-2">
              <p className="text-gray-500">Views: {product.view}</p>
              <IoEyeOutline />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
