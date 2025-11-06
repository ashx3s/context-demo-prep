"use client";

import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { signIn } = useAuth();
  return (
    <div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}
