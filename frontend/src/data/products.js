import coffeeImage from "../assets/coffee.png";
import headphoneImage from "../assets/headphone.png";
import monitorImage from "../assets/monitor.png";
import phoneImage from "../assets/phone.jpg";

export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Premium over-ear wireless headphones featuring advanced noise cancellation, high-fidelity sound, and up to 30 hours of battery life for uninterrupted listening.",
    category: "Electronics",
    price: 79.99,
    currency: "EUR",
    inStock: true,
    rating: 4.5,
    image: headphoneImage,
  },

  {
    id: 2,
    name: "Printer",
    description:
      "Reliable all-in-one printer designed for home and office use, offering fast printing, scanning, and copying with high-quality output.",
    category: "Electronics",
    price: 129.99,
    currency: "EUR",
    inStock: true,
    rating: 4.4,
    image: "https://pngimg.com/uploads/printer/printer_PNG101587.png",
  },

  {
    id: 3,
    name: "Coffee Maker",
    description:
      "Efficient drip coffee maker with programmable settings and a 12-cup capacity, designed to deliver consistent and flavorful coffee with ease.",
    category: "Home Appliances",
    price: 39.99,
    currency: "EUR",
    inStock: false,
    rating: 4.0,
    image: coffeeImage,
  },
  
  {
    id: 4,
    name: "Gaming Mouse",
    description:
      "Ergonomic gaming mouse with customizable RGB lighting, adjustable DPI settings, and programmable buttons for enhanced precision and control.",
    category: "Electronics",
    price: 29.99,
    currency: "EUR",
    inStock: true,
    rating: 4.7,
    image:
      "https://pngimg.com/uploads/computer_mouse/computer_mouse_PNG7662.png",
  },

  {
    id: 5,
    name: "Desktop Computer",
    description:
      "High-performance desktop computer suitable for productivity, content creation, and everyday computing tasks.",
    category: "Electronics",
    price: 899.99,
    currency: "EUR",
    inStock: true,
    rating: 4.6,
    image: "https://pngimg.com/uploads/computer_pc/computer_pc_PNG17489.png",
  },
  {
    id: 6,
    name: "Monitor",
    description:
      "Ultra HD monitor with vibrant colors, wide viewing angles, and a slim bezel design for work and entertainment.",
    category: "Electronics",
    price: 219.99,
    currency: "EUR",
    inStock: true,
    rating: 4.5,
    image: monitorImage,
  },
  {
    id: 7,
    name: "Laptop",
    description:
      "Lightweight laptop with powerful performance, long battery life, and a sleek design for professionals and students.",
    category: "Electronics",
    price: 749.99,
    currency: "EUR",
    inStock: true,
    rating: 4.4,
    image: "https://pngimg.com/uploads/laptop/laptop_PNG101816.png",
  },
  {
    id: 8,
    name: "Smartphone",
    description:
      "Modern smartphone featuring a high-resolution display, advanced camera system, and fast performance.",
    category: "Electronics",
    price: 599.99,
    currency: "EUR",
    inStock: true,
    rating: 4.6,
    image: phoneImage,
  },
  {
    id: 9,
    name: "Tablet",
    description:
      "Versatile tablet with a large display, smooth performance, and portability for work, entertainment, and creativity.",
    category: "Electronics",
    price: 429.99,
    currency: "EUR",
    inStock: true,
    rating: 4.3,
    image: "https://pngimg.com/uploads/tablet/tablet_PNG8599.png",
  },
];
