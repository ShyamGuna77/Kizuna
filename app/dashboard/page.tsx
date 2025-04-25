"use client";

import { useAuth } from "../hooks/useAuth";

export default function DashboardPage() {
  const { session, logout } = useAuth();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Sign out
          </button>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome back, {session?.user?.name}!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Your Profile</h3>
              <p className="text-gray-600">Email: {session?.user?.email}</p>
              <p className="text-gray-600">Role: {session?.user?.role}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Account Status</h3>
              <p className="text-green-600">Active</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <p className="text-gray-600">
            You&apos;re logged in to a protected route!
          </p>
        </div>
      </div>
    </div>
  );
}
