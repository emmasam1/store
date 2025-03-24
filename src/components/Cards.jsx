import { Card } from "antd";
const { Meta } = Card;
import { useNavigate } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import axios from "axios";

// Cards component now accepts products as a prop
const Cards = ({ products }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    if (!localStorage.getItem(`viewed_${id}`)) {
      const viewProductUrl = `https://store-server-6lv5.onrender.com/api/product/view/${id}`;
      axios
        .get(viewProductUrl)
        .then((response) => {
          // Optionally, you can update the product view count here
          console.log(response)
        })
        .catch((error) => {
          console.error("Error incrementing product views:", error);
        });
      localStorage.setItem(`viewed_${id}`, 'true');
    }
    navigate(`/product/${id}`);
  };

  if (!products.length) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>No products available</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 mt-10">
        {products.map((product) => (
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
            <Meta title={product.productName} />
            <div className="flex justify-between items-center mt-2">
              {`Price: ₦ ${product.price}`}
              {product.oldPrice ? (
                <p className="text-gray-400 line-through">{`₦ ${product.oldPrice}`}</p>
              ) : ""}
            </div>

            <div className="flex items-center gap-2 mt-2">
              <p className="text-gray-500">Views: {product.views}</p>
              <IoEyeOutline />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
