import React from "react";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment</h2>

        {/* Dummy Payment Methods UI */}
        <div className="space-y-4">
          <button className="w-full border p-3 rounded-lg hover:bg-gray-100">
            💳 Pay with Card
          </button>
          <button className="w-full border p-3 rounded-lg hover:bg-gray-100">
            🏦 Pay with Bank Transfer
          </button>
          <button className="w-full border p-3 rounded-lg hover:bg-gray-100">
            📱 Pay with UPI / Wallet
          </button>
        </div>
          <Link to="/" target="_blank">
        <button
          onClick={() => alert("Thanks For Purchasing")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition"
        >
      
          Place Order
       
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default PlaceOrder;
