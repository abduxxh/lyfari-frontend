// File: /client/src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    q1: "",
    q2: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://lyfari-backend.vercel.app/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      window.location.href = "/thank-you";
    } catch (err) {
      console.error("Submission failed", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-2 text-indigo-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Lyfari
        </motion.h1>
        <p className="text-lg md:text-xl text-indigo-300 italic">
          In soul and signal, we remember.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-900 text-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 bg-black text-white rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 bg-black text-white rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            When was the last time you felt deeply seen?
          </label>
          <textarea
            name="q1"
            value={formData.q1}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 bg-black text-white rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            What kind of emotional connection do you crave?
          </label>
          <textarea
            name="q2"
            value={formData.q2}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 bg-black text-white rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700"
        >
          Reveal My SoulMatch
        </button>
      </form>
    </div>
  );
}
