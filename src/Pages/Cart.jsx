import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";   // ✅ import

const Cart = () => {
  const { cart } = useContext(ShopContext);
  const navigate = useNavigate();                 // ✅ hook use

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 border-b pb-4"
            >
              {/* Product Image */}
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-24 h-24 object-contain border rounded-lg"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  Price: ${item.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>

              {/* Subtotal */}
              <div className="text-lg font-bold text-blue-600">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="flex justify-between items-center pt-6 border-t">
            <h2 className="text-xl font-bold">Total</h2>
            <p className="text-2xl font-bold text-blue-600">
              ${total.toFixed(2)}
            </p>
          </div>

          {/* Checkout Button */}
          <button
  onClick={() => navigate("/orders")}
  className="w-full bg-green-600 border-2 hover:!bg-green-700 hover:!text-white border-green-600 text-white py-3 rounded-lg mt-6 transition-all"
>
  Proceed to Checkout
</button>

        </div>
      )}
    </div>
  );
};

export default Cart;
