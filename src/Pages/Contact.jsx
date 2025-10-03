import React from "react";

const Contact = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Have questions or need help? Our team is here for you. Reach out anytime!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              We'd love to hear from you. Whether you have a question about products,
              orders, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="space-y-4 text-gray-700">
            <p><span className="font-semibold">📍 Address:</span> 123 Market Street, Karachi, Pakistan</p>
            <p><span className="font-semibold">📞 Phone:</span> +92 308 7475047</p>
            <p><span className="font-semibold">📧 Email:</span> adil@ourstore.com</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Working Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9am - 8pm</p>
            <p className="text-gray-600">Sat - Sun: 10am - 6pm</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Find Us on Map</h2>
        <iframe
          title="map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=67.01,24.85,67.09,24.87&layer=mapnik"
          className="w-full h-96 rounded-lg shadow-md"
        ></iframe>
        <p className="text-center text-sm text-gray-500 mt-2">
          View Larger Map on{" "}
          <a
            href="https://www.openstreetmap.org/#map=16/24.8607/67.0344"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            OpenStreetMap
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
