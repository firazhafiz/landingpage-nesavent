import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--custom-light)] to-white p-4">
      <div className="w-full max-w-md">
        {/* Logo atau Judul */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--custom-blue)]">
            Create Account
          </h1>
          <p className="text-gray-600 mt-2">Join us and start your journey</p>
        </div>

        {/* Form Register */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--custom-orange)] focus:border-transparent outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--custom-orange)] focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--custom-orange)] focus:border-transparent outline-none transition-all"
                placeholder="Create a password"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--custom-orange)] focus:border-transparent outline-none transition-all"
                placeholder="Confirm your password"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-[var(--custom-orange)] focus:ring-[var(--custom-orange)] border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-[var(--custom-orange)] hover:text-[var(--custom-blue)]"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[var(--custom-orange)] hover:text-[var(--custom-blue)]"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[var(--custom-orange)] text-white py-3 rounded-lg font-medium hover:bg-[var(--custom-blue)] transition-colors duration-300"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[var(--custom-orange)] hover:text-[var(--custom-blue)] transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
