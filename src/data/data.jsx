const products = [
    {
      id: 1,
      product_name: "Palm Oil",
      price: 79.99,
      description:
        "High-quality wireless headphones with noise-canceling features.",
      image: "https://images-cdn.ubuy.co.in/634f4e2f6b9b2c4d844c1763-zomi-palm-oil-500-ml-of-premium.jpg",
      view: 2
    },
    {
      id: 2,
      product_name: "Charcoal",
      price: 999.99,
      description: "Latest smartphone with a 6.5-inch display and 128GB storage.",
      image: "https://grandroyalcoco.com/wp-content/uploads/2022/01/Hardwood-Lump-Charcoal-1-1024x1024.jpg",
      view: 10
    },
    {
      id: 3,
      product_name: "Cocoa",
      price: 1200.0,
      description: "Powerful laptop with an Intel i7 processor and 16GB RAM.",
      image: "https://tinkerandbell.com/wp-content/uploads/2024/07/img-cocoa-beans.jpg",
      view: 5
    },
    {
      id: 4,
      product_name: "Ginger",
      price: 45.5,
      description: "Portable Bluetooth speaker with 12 hours of battery life.",
      image: "https://farmbox.ng/wp-content/uploads/2021/06/Ginger-500x500-1.jpg",
      view: 4
    },
    {
      id: 5,
      product_name: "Cola Nut",
      price: 199.99,
      description:
        "Fitness tracking smartwatch with heart rate monitoring and GPS.",
      image: "https://www.supermart.ng/cdn/shop/files/bsprnw407.jpg?v=1689075502",
      view: 4
    },
    {
      id: 6,
      product_name: "Cassava",
      price: 39.99,
      description: "Ergonomic gaming mouse with customizable RGB lighting.",
      image: "https://organicfoods.com.ng/wp-content/uploads/2019/09/cassava-1.jpg",
      view: 4
    },
    {
      id: 7,
      product_name: "Soya Beans",
      price: 399.99,
      description: "Ultra HD 4K monitor with HDR support.",
      image: "https://www.foodlocker.com.ng/public/product/soya%20beans.png",
      view: 4
    },
    // {
    //   id: 8,
    //   product_name: "Smart Thermostat",
    //   price: 149.99,
    //   description:
    //     "Energy-efficient smart thermostat with remote control features.",
    //   image: "https://example.com/images/thermostat.jpg",
    // },
    // {
    //   id: 9,
    //   product_name: "Coffee Maker",
    //   price: 99.99,
    //   description: "Programmable coffee maker with a built-in grinder.",
    //   image: "https://example.com/images/coffee-maker.jpg",
    // },
    // {
    //   id: 10,
    //   product_name: "Electric Toothbrush",
    //   price: 49.99,
    //   description:
    //     "Advanced electric toothbrush with 2-minute timer and multiple modes.",
    //   image: "https://example.com/images/toothbrush.jpg",
    // },
    // {
    //   id: 11,
    //   product_name: "Air Purifier",
    //   price: 129.99,
    //   description: "HEPA filter air purifier for cleaner air in your home.",
    //   image: "https://example.com/images/air-purifier.jpg",
    // },
    // {
    //   id: 12,
    //   product_name: "Smart Light Bulb",
    //   price: 19.99,
    //   description: "Wi-Fi-enabled smart light bulb with color-changing features.",
    //   image: "https://example.com/images/smart-light-bulb.jpg",
    // },
    // {
    //   id: 13,
    //   product_name: "Bluetooth Earbuds",
    //   price: 29.99,
    //   description:
    //     "Compact and comfortable Bluetooth earbuds for on-the-go listening.",
    //   image: "https://example.com/images/earbuds.jpg",
    // },
    // {
    //   id: 14,
    //   product_name: "Digital Camera",
    //   price: 699.99,
    //   description:
    //     "High-quality digital camera with 20MP resolution and 4K video recording.",
    //   image: "https://example.com/images/digital-camera.jpg",
    // },
    // {
    //   id: 15,
    //   product_name: "Wireless Router",
    //   price: 89.99,
    //   description:
    //     "High-speed Wi-Fi router with extended range and multiple device support.",
    //   image: "https://example.com/images/router.jpg",
    // },
    // {
    //   id: 16,
    //   product_name: "Smart Speaker",
    //   price: 99.99,
    //   description:
    //     "Voice-controlled smart speaker with built-in virtual assistant.",
    //   image: "https://example.com/images/smart-speaker.jpg",
    // },
    // {
    //   id: 17,
    //   product_name: "Portable Charger",
    //   price: 29.99,
    //   description: "Compact portable charger with 10,000mAh capacity.",
    //   image: "https://example.com/images/portable-charger.jpg",
    // },
    // {
    //   id: 18,
    //   product_name: "Action Camera",
    //   price: 199.99,
    //   description: "Waterproof action camera with 4K recording capabilities.",
    //   image: "https://example.com/images/action-camera.jpg",
    // },
    // {
    //   id: 19,
    //   product_name: "Electric Kettle",
    //   price: 29.99,
    //   description:
    //     "Quick-boil electric kettle with temperature control settings.",
    //   image: "https://example.com/images/electric-kettle.jpg",
    // },
    // {
    //   id: 20,
    //   product_name: "Smart Lock",
    //   price: 129.99,
    //   description: "Keyless entry smart lock with mobile app control.",
    //   image: "https://example.com/images/smart-lock.jpg",
    // },
    // {
    //   id: 21,
    //   product_name: "Fitness Tracker",
    //   price: 59.99,
    //   description:
    //     "Wearable fitness tracker with step counting and sleep monitoring.",
    //   image: "https://example.com/images/fitness-tracker.jpg",
    // },
    // {
    //   id: 22,
    //   product_name: "Laptop Stand",
    //   price: 25.99,
    //   description: "Adjustable laptop stand for ergonomic viewing and typing.",
    //   image: "https://example.com/images/laptop-stand.jpg",
    // },
    // {
    //   id: 23,
    //   product_name: "Drone",
    //   price: 499.99,
    //   description:
    //     "High-definition drone with 4K camera and 30-minute flight time.",
    //   image: "https://example.com/images/drone.jpg",
    // },
    // {
    //   id: 24,
    //   product_name: "Wireless Charger",
    //   price: 19.99,
    //   description: "Fast wireless charger compatible with most smartphones.",
    //   image: "https://example.com/images/wireless-charger.jpg",
    // },
    // {
    //   id: 25,
    //   product_name: "Bluetooth Keyboard",
    //   price: 39.99,
    //   description:
    //     "Compact Bluetooth keyboard with responsive keys and long battery life.",
    //   image: "https://example.com/images/bluetooth-keyboard.jpg",
    // },
    // {
    //   id: 26,
    //   product_name: "Cordless Vacuum Cleaner",
    //   price: 149.99,
    //   description:
    //     "Lightweight cordless vacuum with strong suction and long battery life.",
    //   image: "https://example.com/images/vacuum.jpg",
    // },
    // {
    //   id: 27,
    //   product_name: "Smart Camera",
    //   price: 109.99,
    //   description: "Indoor smart camera with motion detection and two-way audio.",
    //   image: "https://example.com/images/smart-camera.jpg",
    // },
    // {
    //   id: 28,
    //   product_name: "Electric Skateboard",
    //   price: 399.99,
    //   description:
    //     "Electric skateboard with a 15-mile range and 20mph top speed.",
    //   image: "https://example.com/images/electric-skateboard.jpg",
    // },
    // {
    //   id: 29,
    //   product_name: "Gaming Headset",
    //   price: 59.99,
    //   description:
    //     "Comfortable gaming headset with surround sound and noise cancellation.",
    //   image: "https://example.com/images/gaming-headset.jpg",
    // },
    // {
    //   id: 30,
    //   product_name: "Smartphone Case",
    //   price: 15.99,
    //   description:
    //     "Durable and stylish smartphone case for protection and style.",
    //   image: "https://example.com/images/phone-case.jpg",
    // },
  ];
  
  export default products;
  