"use client";
import { useEffect, useState } from "react";
import API_BASE_URL from "@/config/api";
import { useParams, useRouter } from "next/navigation";

interface Product {
  id: number;
  productName: string;
  price: number;
  color: string;
  size: string[];
  stock: string;
  description: string;
  imageUrl: string;
}

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState<Product>({
    id: Number(id),
    productName: "",
    price: 0,
    color: "",
    size: [],
    stock: "",
    description: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(true);
  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/product/${id}`,
          {
            method: "GET",
          }
        );
        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();
        console.log("Product data:", data);

        // Clean the size array if it's incorrectly formatted
        const parsedSizes = data.size
          .map((size: string) => size.replace(/["\[\] ]/g, "").trim()) // Remove unwanted characters
          .filter((size: string) => size); // Filter out empty values

        setFormData({
          ...data,
          size: parsedSizes,
        });
      } catch (err) {
        alert("❌ Error loading product");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const toggleSize = (size: string) => {
    setFormData((prev) => {
      const sizes = prev.size.includes(size)
        ? prev.size.filter((s) => s !== size)
        : [...prev.size, size];
      return { ...prev, size: sizes };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      size: formData.size, // size is already array
    };

    try {
      const res = await fetch(
        `${API_BASE_URL}/product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          
        }
      );
      console.log(res.body)
      if (!res.ok) throw new Error("Failed to update product");
      alert("✅ Product updated successfully!");
      router.push("/adminpanel/products");
    } catch (err) {
      alert("❌ Failed to update product");
      console.error(err);
    }
  };

  if (loading) return <div className="p-6 text-lg">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="productName"
          type="text"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          name="color"
          type="text"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          name="stock"
          type="text"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <div>
          <p className="mb-2 font-medium">Available Sizes:</p>
          <div className="flex flex-wrap gap-4">
            {sizeOptions.map((size) => (
              <label key={size} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.size.includes(size)} // Check if the size is selected
                  onChange={() => toggleSize(size)}
                  className="form-checkbox"
                />
                <span>{size}</span>
              </label>
            ))}
          </div>
        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="imageUrl"
          type="text"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
