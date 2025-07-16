import React, { useState } from "react";

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
    console.log("Submitting:", formData);
    // TODO: Add backend POST request or connect with Google Sheets API
  };

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "2rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "3rem", color: "#6366f1", fontWeight: "bold" }}>Lyfari</h1>
        <p style={{ color: "#a5b4fc", fontSize: "1.2rem" }}>Discover Your Emotional Frequency</p>
      </header>

      <form onSubmit={handleSubmit} style={{
        maxWidth: "500px", margin: "0 auto", background: "#111", padding: "2rem",
        borderRadius: "1rem", boxShadow: "0 0 20px rgba(0,0,0,0.5)"
      }}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0", background: "#000", color: "#fff", border: "1px solid #444", borderRadius: "0.5rem" }}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0", background: "#000", color: "#fff", border: "1px solid #444", borderRadius: "0.5rem" }}
          />
        </div>

        <div>
          <label>When was the last time you felt deeply seen?</label>
          <textarea
            name="q1"
            value={formData.q1}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0", background: "#000", color: "#fff", border: "1px solid #444", borderRadius: "0.5rem" }}
          />
        </div>

        <div>
          <label>What kind of emotional connection do you crave?</label>
          <textarea
            name="q2"
            value={formData.q2}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0", background: "#000", color: "#fff", border: "1px solid #444", borderRadius: "0.5rem" }}
          />
        </div>

        <button type="submit" style={{
          width: "100%", background: "#4f46e5", color: "#fff", padding: "0.8rem", border: "none", borderRadius: "1rem",
          fontWeight: "bold", cursor: "pointer", marginTop: "1rem"
        }}>
          Reveal My SoulMatch
        </button>
      </form>
    </div>
  );
}
