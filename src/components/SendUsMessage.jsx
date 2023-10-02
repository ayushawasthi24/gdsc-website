import React, { useState } from "react";

const SendUsMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-blue-200 py-8">
      <div className="max-w-md mx-auto p-6">
        <h2 className="text-4xl font-semibold text-center text-red-500 mb-4">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 border-b-2 border-blue-500 focus:outline-none rounded-xl focus:border-blue-700"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border-b-2 border-red-500 focus:outline-none rounded-xl focus:border-red-700"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full px-3 py-2 border-b-2 border-green-500 focus:outline-none rounded-xl focus:border-green-700"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full px-3 py-2 border-b-2 border-yellow-500 focus:outline-none rounded-xl focus:border-yellow-700"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendUsMessage;
