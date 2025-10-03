import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useContext(ShopContext);

  const [IdProduct, setIdProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find((p) => p._id === Id);
      if (product) {
        setIdProduct(product);
        setMainImage(product.image[0]); // Default main image
      }
    }
  }, [Id, products]);

  if (!IdProduct) {
    return (
      <div className="p-10 text-center text-gray-500">
        Product not found or loading...
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(IdProduct, quantity);
    navigate("/cart"); // redirect to cart page
  };

  return (
    <div className="border-t-2 pt-10 transition-opacity duration-500 ease-in-out opacity-100">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side: Product Images */}
        <div className="flex-1 flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 w-24">
            {IdProduct.image?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${IdProduct.name} ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                  mainImage === img
                    ? "border-blue-500 shadow-md"
                    : "border-gray-200 hover:border-gray-400"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* Main Image with Hover Zoom */}
          <div className="flex-1 flex justify-center items-center border rounded-lg p-6 bg-gray-50 overflow-hidden group">
            <img
              src={mainImage}
              alt={IdProduct.name}
              className="max-h-[500px] object-contain transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="flex-1 flex flex-col gap-6 p-6 bg-white rounded-xl shadow-md">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            {IdProduct.name}
          </h1>

          {/* Price */}
          <p className="text-2xl font-bold text-blue-600">
            ${IdProduct.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed border-t pt-4">
            {IdProduct.description}
          </p>

          {/* Quantity Selector */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Quantity
            </h3>
            <div className="flex items-center gap-4">
              <button
                className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                –
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 shadow-sm transition-all"
            >
              Add to Cart
            </button>
            <button className="flex-1 border border-gray-300 py-3 px-6 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
              Buy Now
            </button>
          </div>

          {/* Extra Info */}
          <div className="mt-6 text-sm text-gray-600 space-y-2">
            <p>🚚 <span className="font-medium">Free Shipping</span> on orders over $50</p>
            <p>↩️ <span className="font-medium">30-Day Returns</span> – hassle free</p>
            <p>⭐ <span className="font-medium">Trusted</span> by thousands of happy customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
