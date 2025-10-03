import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("");
  const navigate = useNavigate();

  // Demo product data (replace with your context/cart data)
  const handleSelect = (option) => {
    setMethod(option);
    console.log(`${option} selected`);
    alert(`You selected ${option}`);
  };

  const handlePlaceOrder = () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }

    alert(
      `Order placed successfully Thanks ALot For Using ${method}! Redirecting to Home...`
    );
    console.log(
      `Order placed with ${method} for ${IdProduct.name} (${IdProduct.currency}${IdProduct.price})`
    );

    // ✅ Redirect to Home page
    navigate("/");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment</h2>

        {/* Dummy Payment Methods UI */}
        <div className="space-y-4">
          <button
            onClick={() => handleSelect("Card")}
            className={`w-full border p-3 rounded-lg hover:bg-gray-100 ${
              method === "Card" ? "border-blue-600" : ""
            }`}
          >
            💳 Pay with Card
          </button>
          <button
            onClick={() => handleSelect("Bank Transfer")}
            className={`w-full border p-3 rounded-lg hover:bg-gray-100 ${
              method === "Bank Transfer" ? "border-blue-600" : ""
            }`}
          >
            🏦 Pay with Bank Transfer
          </button>
          <button
            onClick={() => handleSelect("UPI / Wallet")}
            className={`w-full border p-3 rounded-lg hover:bg-gray-100 ${
              method === "UPI / Wallet" ? "border-blue-600" : ""
            }`}
          >
            📱 Pay with UPI / Wallet
          </button>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
