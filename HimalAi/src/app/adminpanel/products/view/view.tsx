"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import API_BASE_URL from "@/config/api";

interface Post {
  id: number;
  price: number;
  imageUrl: string;
  productName: string;
  color: string;
  size: string[];
  stock: string;
  description: string;
}

export default function FetchAPI() {
  const [products, setProducts] = useState<Post[]>([]);
  const router = useRouter();
  let count = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/product/`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log(setProducts(json));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${API_BASE_URL}/product/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Failed to delete product");

      alert("✅ Product deleted successfully!");
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      alert("❌ Failed to delete product");
      console.error(err);
    }
  };

  return (
    <>
      <div className="p-10">
        <div className="head flex w-full justify-between items-center mb-4">
          <h2 className="text-2xl font-extrabold mb-4">Product Table</h2>
          <button
            onClick={() => {
              router.push("/adminpanel/products/add");
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Add Product + 
          </button>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">S.N.</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Color</th>
                <th className="px-4 py-3">Size</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 overflow-hidden">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{++count}</td>
                  <td className="px-4 py-3 font-medium">
                    {product.productName}
                  </td>
                  <td className="px-4 py-3">{product.color}</td>
                  <td className="px-4 py-3">{product.size.join(", ")}</td>
                  <td className="px-4 py-3">Rs. {product.price}</td>
                  <td className="px-4 py-3">{product.stock}</td>
                  <td className="px-4 py-3 max-w-sm truncate">
                    {product.description}
                  </td>
                  <td className="px-4 py-3">
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      className="w-12 h-12 object-cover rounded hover:scale-250 transition-transform duration-200"
                    />
                  </td>
                  <td className="px-4 flex gap-5 py-3">
                    <button
                      onClick={() => {
                        router.push(`/adminpanel/products/edit/${product.id}`);
                      }}
                      className="text-blue-500 hover:text-blue-700 hover:cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700 hover:cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
