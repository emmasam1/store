import { Card } from "antd";
const { Meta } = Card;
import { useNavigate } from "react-router";
import products from "../data/data";
import { IoEyeOutline } from "react-icons/io5";

const Cards = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate to other routes

  const handleCardClick = (id) => {
    // When the card is clicked, navigate to the details page
    navigate(`/product/${id}`);
  };

  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            hoverable
            cover={<img alt={product.product_name} src={product.image} />}
            onClick={() => handleCardClick(product.id)}
          >
            <Meta
              title={product.product_name}
              description={`Price: $${product.price}`}
            />
            <div className="flex items-center gap-2">
              <p className="mt-2 text-gray-500">views: {product.view}</p>
              <IoEyeOutline className="mt-2" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
