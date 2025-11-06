"use client";
import Link from "next/link";
import { useCounter } from "../hooks/useCounter";
import Button from "../components/Button";
export default function CounterSection() {
  const { count, increment, decrement } = useCounter(0);
  return (
    <section className="my-4">
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
        <Button text="Increment" onClick={increment} />
        <Button text="Decrement" onClick={decrement} variant="secondary" />
      </div>
    </section>
  );
}
