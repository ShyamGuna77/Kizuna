

"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (
    email: string,
    password: string,
    callbackUrl: string = "/dashboard"
  ): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
        return false;
      }

      router.push(callbackUrl || "/dashboard");
      return true;
    } catch (error) {
      setError("An unexpected error occurred");
      console.error(error, "Error during login in useAuth");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const contentType = response.headers.get("content-type");

     
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Server returned HTML instead of JSON:", text);
        setError("Unexpected server response from register API");
        return false;
      }

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
        return false;
      }
      console.error(error, "Error during registration in useAuth");
      return await login(email, password);
    } catch (error) {
      setError("An unexpected error occurred");
      console.error(error, "inside register useAuth");
      return false;
    } finally {
      setLoading(false);
    }
  };


  const logout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return {
    isAdmin: session?.user?.role === "admin" || false,
    status,
    isAuthenticated: !!session,
    isLoading: status === "loading" || loading,
    login,
    register,
    logout,
    error,
  };
}