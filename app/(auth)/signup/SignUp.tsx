'use client'

import React from 'react'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { RegisterSchema,registerSchema } from '@/lib/schemas/RegisterSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from '@/app/hooks/useAuth';
import Link from 'next/link';

const SignUp = () => {
   const { register: registerUser, isLoading, error } = useAuth();
    const {register,handleSubmit,formState:{errors}} = useForm<RegisterSchema>({
        resolver:zodResolver(registerSchema),
        mode:'onTouched'
    })
    const onSubmit = async (data:RegisterSchema) => {
      await registerUser(data.name,data.email,data.password)
    }
  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white border-2 border-black p-8 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Account 💘
        </h1>
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-sm">Username</label>
            <input
              type="text"
              placeholder="Naruto_Uzumaki"
              className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="luffy@example.com"
              className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-400 text-white font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <div className="mt-6 flex space-x-4">
          <button className="flex-1 flex items-center justify-center bg-blue-600 text-white font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
            <FaGoogle className="mr-2" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center bg-gray-900 text-white font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
            <FaGithub className="mr-2" />
            GitHub
          </button>
        </div>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline font-bold hover:text-pink-400 transition-colors"
          >
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}

export default SignUp