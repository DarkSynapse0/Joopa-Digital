// app/adminpanel/orders/[orderId].tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import API_BASE_URL from "@/config/api";

interface OrderDetail {
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

export default function OrderDetailPage() {
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId"); // This retrieves the orderId from the URL

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (orderId) {
        try {
          const res = await fetch(`${API_BASE_URL}/order/${orderId}`);
          const data = await res.json();
          setOrder(data);
        } catch (err) {
          console.error("Error fetching order details:", err);
        }
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!order) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Details: {order.id}</h1>
      {/* Display order details here */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Customer: {order.customer.fullName}</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border-b">Product Name</th>
              <th className="p-2 border-b">Quantity</th>
              <th className="p-2 border-b">Price</th>
              <th className="p-2 border-b">Size</th>
              <th className="p-2 border-b">Color</th>
            </tr>
          </thead>
          <tbody>
            {order.orderItem.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border-b">{item.product.productName}</td>
                <td className="p-2 border-b">{item.quantity}</td>
                <td className="p-2 border-b">${Number(item.price).toFixed(2)}</td>
                <td className="p-2 border-b">{item.size.join(", ")}</td>
                <td className="p-2 border-b">{item.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* More details like payment info */}
    </div>
  );
}
