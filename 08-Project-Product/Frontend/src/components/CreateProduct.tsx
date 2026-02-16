import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/productAPIService";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    price: "",
    featured: false,
    rating: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await createProduct(formData);
      navigate("/");
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Product</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <select
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select Company</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="dell">Dell</option>
          <option value="mi">Mi</option>
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (optional)"
          value={formData.rating}
          onChange={handleChange}
          step="0.1"
          min="0"
          max="5"
          className="w-full p-3 border rounded-lg"
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <span>Featured Product</span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
