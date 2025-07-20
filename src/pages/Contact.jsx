import React, { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobLevel: "",
    companyName: "",
    companySize: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* 🔶 Banner Section */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg text-gray-300">
            Reach out to CyberSecure. We’d love to hear from you!
          </p>
        </div>
      </section>

      {/* 🔷 Contact Form Section */}
      <section className="bg-gray-100 text-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 bg-white rounded-xl shadow-lg p-8">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Welcome to CyberSecure</h3>
              <p className="text-gray-600">Connect with us</p>

              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">📞 Call us</p>
                  <p className="text-gray-600">617‑431‑8901</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">📧 Email</p>
                  <p className="text-gray-600">info@CyberSecure.com</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">📍 Office Address</p>
                  <p className="text-gray-600 text-sm">
                    2000 Commonwealth Ave <br />
                    Suite 310 Newton Auburndale, <br />
                    MA 02466
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input-style"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input-style"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input-style"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-style"
              />
              <input
                type="text"
                name="jobLevel"
                placeholder="Job Level"
                value={formData.jobLevel}
                onChange={handleChange}
                className="input-style"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="input-style"
                />
                <input
                  type="text"
                  name="companySize"
                  placeholder="Company Size"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="input-style"
                />
              </div>

              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="input-style"
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="input-style"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
