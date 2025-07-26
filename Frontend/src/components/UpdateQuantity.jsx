import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateQuantity() {
  const location = useLocation();
  const { id } = location.state || {};

  const [quantity, setQuantity] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/products/update/${id}/quantity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
      });
      const data = await res.json();
      //   console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      navigate("/dashboard/list");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col min-w-64 max-w-64 mx-auto mt-20 gap-2">
      <h1 className="mb-3 text-center text-lg font-semibold">
        Update Product Quantity
      </h1>
      <input
        type="number"
        className="rounded-md p-2"
        placeholder="Quantity"
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button
        disabled={loading}
        onClick={handleClick}
        className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
      >
        {loading ? "Loading..." : "update"}
      </button>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
