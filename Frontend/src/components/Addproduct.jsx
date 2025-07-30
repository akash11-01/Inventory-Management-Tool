import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Addproduct() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setFormData({});
      setLoading(false);
      navigate("/dashboard/list");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  console.log(formData);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          placeholder="Image"
          className="border p-3 rounded-lg"
          id="image_url"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="name"
          className="border p-3 rounded-lg"
          id="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="type"
          className="border p-3 rounded-lg"
          id="type"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="sku"
          className="border p-3 rounded-lg"
          id="sku"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="decscription"
          className="border p-3 rounded-lg"
          id="description"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="quantity"
          className="border p-3 rounded-lg"
          id="quantity"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="price"
          className="border p-3 rounded-lg"
          id="price"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Add Product"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
