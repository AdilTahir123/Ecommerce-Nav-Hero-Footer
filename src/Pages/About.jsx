import React from "react";

const About = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Us</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-blue-600">Our Store</span>, 
          your trusted destination for premium products and an unmatched shopping experience.
        </p>
      </div>

      {/* Brand Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Our Store"
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded with a vision to bring quality and style together, our store
            has grown into a brand loved by thousands. We believe shopping
            should be more than just buying — it should be an experience.  
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Every product in our collection is carefully curated to ensure you
            get only the best. Whether you're looking for everyday essentials
            or something special, we’ve got you covered.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Our Mission</h3>
          <p className="text-gray-600">
            To make premium products accessible and affordable, while delivering
            exceptional customer service that keeps our community coming back.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Our Vision</h3>
          <p className="text-gray-600">
            To become a globally recognized brand that inspires trust and
            sets the standard for modern shopping experiences.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl">🚚</span>
            <h4 className="text-lg font-semibold mt-3">Fast Delivery</h4>
            <p className="text-gray-600 mt-2">
              Get your products delivered quickly and safely to your doorstep.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl">⭐</span>
            <h4 className="text-lg font-semibold mt-3">Quality Products</h4>
            <p className="text-gray-600 mt-2">
              Only handpicked items that meet our strict quality standards.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl">💬</span>
            <h4 className="text-lg font-semibold mt-3">24/7 Support</h4>
            <p className="text-gray-600 mt-2">
              Friendly customer service always ready to help you anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
