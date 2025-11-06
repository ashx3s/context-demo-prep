"use client";
import Link from "next/link";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { useAuth } from "./contexts/AuthContext";
import { logOut } from "./lib/authHelpers";
export default function Home() {
  const { count, increment, decrement } = useCounter(0);
  const { data, error, isLoading } = useFetch(
    "https://api.restful-api.dev/objects"
  );
  const { authUser, loading } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  if (error) return <p>Error: {error}</p>;
  return (
    <main>
      <header className="my-4">
        <h1 className="text-4xl font-bold">Custom Hooks and Use Context</h1>
        <p>
          Just like useState and useEffect, you can create your own react hooks.
        </p>
        <p>Then you can expand your state management with use Context</p>
      </header>
      <section className="my-4 p-6 bg-stone-300 dark:bg-stone-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Authentication Section</h2>
        {loading ? (
          <p>Loading auth state...</p>
        ) : authUser ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-100 dark:bg-green-900 rounded">
              <p className="font-semibold">Logged in as: {authUser.email}</p>
              <p className="text-sm">User ID: {authUser.uid}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <SignUpForm />
            <LoginForm />
          </div>
        )}
      </section>
      <section>
        <header>
          <h2 className="text-3xl font-bold mb-2">Custom Hook Counter</h2>
          <p>
            Documentation for custom hooks:{" "}
            <Link href="https://react.dev/learn/reusing-logic-with-custom-hooks">
              React Docs
            </Link>
          </p>
        </header>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Count: {count}</h3>
        </div>
        <div className="flex gap-4 max-w-sm">
          <button
            onClick={increment}
            className="p-4 bg-blue-500 dark:bg-orange-500 hover:bg-blue-700 hover:dark:bg-orange-700"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="p-4 bg-red-500 dark:bg-pink-500 hover:bg-red-700 hover:dark:bg-pink-700"
          >
            Decrement
          </button>
        </div>
      </section>
      <section>
        <header>
          <h2>Custom Fetch Hook</h2>
        </header>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h3>List of Data</h3>
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
