"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import API_BASE_URL from "@/config/api";

interface Order {
  id: string;
  orderItem: {
    id: string;
    quantity: string;
    price: string | number;
    imageUrl: string;
    color: string;
    product: {
      productName: string;
    };
    size: string[];
  }[];
  customer: {
    fullName: string;
  };
  payment: {
    id: string;
    payment_method: string;
    status: string;
    createdAt: string;
  };
  total_amount: string;
  createdAt: string;
}

const getStatusColor = (status: string | undefined) => {
  if (!status) return "text-gray-500"; // Default color for undefined status
  return status.toLowerCase() === "complete" ? "text-green-600" : "text-red-600";
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/order`);
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Orders</h1>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="p-2 border-b">Order ID</th>
              <th className="p-2 border-b">Customer</th>
              <th className="p-2 border-b">Product Name</th>
              <th className="p-2 border-b">Quantity</th>
              <th className="p-2 border-b">Price</th>
              <th className="p-2 border-b">Total Amount</th>
              <th className="p-2 border-b">Payment Status</th>
              <th className="p-2 border-b">Date</th>
              {/* <th className="p-2 border-b">Details</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) =>
              order.orderItem.map((item) => (
                <tr key={`${order.id}-${item.id}`}>
                  <td className="p-2 border-b">{order.id}</td>
                  <td className="p-2 border-b">{order.customer.fullName}</td>
                  <td className="p-2 border-b">{item.product.productName}</td>
                  <td className="p-2 border-b">{item.quantity}</td>
                  <td className="p-2 border-b">
                    Rs. {!isNaN(Number(item.price)) ? Number(item.price).toFixed(2) : "0.00"}
                  </td>
                  <td className="p-2 border-b">Rs. {Number(order.total_amount).toFixed(2)}</td>
                  <td className={`p-2 border-b font-semibold ${getStatusColor(order.payment?.status)}`}>
                    {order.payment?.status || "unknown"}
                  </td>
                  <td className="p-2 border-b">{new Date(order.createdAt).toLocaleString()}</td>
                  <td className="p-2 border-b text-center">
                    {/* <Link
                      href={`/adminpanel/order/${order.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View Details
                    </Link> */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
