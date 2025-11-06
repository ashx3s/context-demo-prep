"use client";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";

export default function Page() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [updating, setUpdating] = useState(false);
  useEffect(() => {
    // will force user to login page
    if (!loading && !authUser) {
      router.push("/");
    }
    if (authUser) {
      setUsername(authUser.displayName || "");
    }
  }, [authUser, loading, router]);
  const handleUpdateUsername = async (e) => {
    e.preventDefault();
    if (!authUser) return;
    setUpdating(true);
    try {
      await updateProfile(authUser, {
        displayName: username,
      });
      alert("Username updated");
    } catch (error) {
      console.error("Update Error: ", error);
    } finally {
      setUpdating(false);
    }
  };
  if (loading) {
    return <div> Verifying authentication...</div>;
  }
  if (!authUser) {
    return null;
  }
  return (
    <main>
      <header className="my-4">
        <h1 className="text-2xl">Protected Page</h1>
        <p>Only logged in users can access this.</p>
        <p>Goal: Allow users to update their name in their account.</p>
        <p>Secondary Goal: Explore ssr vs csr errors.</p>
      </header>
      <section>
        <header>
          <h2 className="text-xl font-semibold">Change User Name</h2>
          <p className="text-lg my-2">
            Username:{" "}
            {authUser.displayName
              ? `${authUser.displayName}`
              : "no display name"}
          </p>
          <p className="text-lg my-2">Email: {authUser.email}</p>
        </header>
      </section>
      <section>
        <h2 className="text-2xl">Update Username</h2>
        <form onSubmit={handleUpdateUsername}>
          <label htmlFor="username">Update username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-black dark:border-white border"
          />
          <button
            type="submit"
            disabled={updating || username.trim() === ""}
            className="px-4 py-2 bg-blue-500 my-2"
          >
            {updating ? "Updating..." : "Updating username"}
          </button>
        </form>
      </section>
    </main>
  );
}
