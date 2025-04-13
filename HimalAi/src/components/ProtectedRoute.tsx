"use client";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/context/AdminContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/adminpanel");
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
