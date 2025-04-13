"use client";
import FetchAPI from "./view/view";
import { useAdmin } from "@/context/AdminContext";
import ProtectedRoute from "@/components/ProtectedRoute";

const ProductsPage = () => {
  const { logout } = useAdmin();

  return (
    <div className="p-6">
      <ProtectedRoute>
        <FetchAPI />
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded mb-4 cursor-pointer"
        >
          Logout
        </button>
      </ProtectedRoute>
    </div>
  );
};
export default ProductsPage;
