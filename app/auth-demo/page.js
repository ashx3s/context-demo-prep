"use client";

import { useAuth } from "../contexts/AuthContext";
import { logOut } from "../lib/authHelpers";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

export default function AuthDemoPage() {
  const { authUser, loading } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Firebase Auth Demo</h1>

        {authUser ? (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> {authUser.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">User ID:</span> {authUser.uid}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email Verified:</span>{" "}
                  {authUser.emailVerified ? "Yes" : "No"}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="mt-6 bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700"
              >
                Log Out
              </button>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-bold text-lg mb-2">You're logged in!</h3>
              <p className="text-gray-700">
                This demonstrates that the authentication context is working correctly.
                The user object is available throughout your app via the useAuth hook.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Demo Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>First, create an account using the Sign Up form</li>
                <li>Then log out using the button that appears</li>
                <li>Finally, log back in using the Log In form</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <SignUpForm />
              <LoginForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
