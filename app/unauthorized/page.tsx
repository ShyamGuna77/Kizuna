
"use client";

import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

export default function UnauthorizedPage() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You don&apos;t have permission to access this page. This area requires
          higher privileges.
        </p>
        <div className="flex flex-col space-y-3">
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Dashboard
          </Link>

          {isAuthenticated && (
            <button
              onClick={logout}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}