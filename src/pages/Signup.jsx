import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", formData);
      alert(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" className="input-style" onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" className="input-style" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="input-style" onChange={handleChange} />
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input-style pr-10"
            onChange={handleChange}
          />
          <button type="button" onClick={togglePassword} className="absolute right-3 top-2 text-gray-500">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          className="input-style"
          onChange={handleChange}
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-700 transition">Sign Up</button>
      </form>
      <p className="text-sm text-center">
  Already have an account?{" "}
  <a href="/login" className="text-blue-600 hover:underline">
    Log in
  </a>
</p>

    </div>
  );
};

export default Signup;
