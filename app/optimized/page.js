import CounterSection from "./CounterSection";
import DataFetchSection from "./DataFetchSection";

export default function Page() {
  return (
    <main className="mx-4">
      <header className="my-4">
        <h1 className="text-4xl font-bold">Optimized Page Example</h1>
        <p>Keeps the client code in smaller components</p>
      </header>
      <CounterSection />
      <DataFetchSection />
    </main>
  );
}
