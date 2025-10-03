import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, currency, delivery_fee } = useContext(ShopContext);
  const navigate = useNavigate();

  // Subtotal calculate
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + delivery_fee;

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center text-gray-600">
        Your cart is empty. Add items to checkout.
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Redirect to PlaceOrder page
    navigate("/place-order");
  };

  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Billing Details */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shipping Address
              </label>
              <textarea
                rows="3"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your address"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between">
                <p className="text-gray-700">
                  {item.name} × {item.quantity}
                </p>
                <p className="font-medium">
                  {currency}
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <hr />
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>
                {currency}
                {subtotal.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Delivery Fee</p>
              <p>
                {currency}
                {delivery_fee.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p>
                {currency}
                {total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
