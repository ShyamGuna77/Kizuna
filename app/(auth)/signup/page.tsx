import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white border-2 border-black p-8 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Account 💘
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-sm">Username</label>
            <input
              type="text"
              placeholder="Naruto_Uzumaki"
              className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="luffy@example.com"
              className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-400 text-white font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 flex space-x-4">
          <button
            className="flex-1 flex items-center justify-center bg-blue-600 text-white font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
          >
            <FaGoogle className="mr-2" />
            Google
          </button>
          <button
            className="flex-1 flex items-center justify-center bg-gray-900 text-white font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
          >
            <FaGithub className="mr-2" />
            GitHub
          </button>
        </div>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="underline font-bold hover:text-pink-400 transition-colors"
          >
            Log In
          </a>
        </p>
      </div>
    </main>
  );
}
