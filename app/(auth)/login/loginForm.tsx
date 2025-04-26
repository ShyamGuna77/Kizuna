

"use client"

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginSchema,loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from '@hookform/resolvers/zod'


import Link from "next/link";

const LoginForm = () => {
 
   
    const { register, handleSubmit,formState:{errors,isLoading} } = useForm<LoginSchema>({
      resolver:zodResolver(loginSchema),
      mode:'onTouched'
    });
    const onSubmit =  (data:LoginSchema) => {
      console.log(data)
    }
  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white border-2 border-black p-8 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome Back 💖</h1>

      
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-sm">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="w-full"
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
            <Input
              type="password"
              placeholder="••••••••"
              className="w-full"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-400 text-white font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Log in"}
          </button>
        </form>

        <div className="flex justify-center items-center space-x-4 mt-4">
          <button className="flex-1 bg-blue-500 text-white font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
            Google
          </button>
          <button className="flex-1 bg-gray-800 text-white font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
            GitHub
          </button>
        </div>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="underline font-bold hover:text-pink-400 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginForm;