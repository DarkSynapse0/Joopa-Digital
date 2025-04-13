"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAdmin } from "@/context/AdminContext";

const AdminPanel = () => {
  const router = useRouter();
  const { login } = useAdmin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      router.push("/adminpanel/products");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-100 p-2 rounded mb-4"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 p-2 rounded mb-4"
            placeholder="Password"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
