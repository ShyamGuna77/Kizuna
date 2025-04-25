/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function withAuth(
  Component: React.ComponentType,
  requiredRole?: string
) {
  return function ProtectedRoute(props: any) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/login");
      }

   
      if (
        status === "authenticated" &&
        requiredRole &&
        session?.user?.role !== requiredRole
      ) {
        router.push("/unauthorized");
      }
    }, [session, status, router]);

   
    if (status === "loading" || status === "unauthenticated") {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      );
    }

  
    return <Component {...props} />;
  };
}
