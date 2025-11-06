"use client";
import { useFetch } from "../hooks/useFetch";
export default function DataFetchSection() {
  const { data, error, isLoading } = useFetch(
    "https://api.restful-api.dev/objects"
  );

  const SectionHeader = () => (
    <header>
      <h2 className="text-3xl font-semibold">Custom Fetch Hook</h2>
      <p>
        This syntax works especially when the useState data is set to null
        instead of []
      </p>
    </header>
  );
  // Multiple returns is great for when you break your code up into multiple components
  if (error)
    return (
      <div className="bg-red-500">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  if (isLoading) {
    return (
      <section className="my-4">
        <SectionHeader />
        <p>Loading...</p>
      </section>
    );
  }
  if (!data) {
    return (
      <section className="my-4">
        <SectionHeader />
        <p className="text-lg font-semibold">No Data Available</p>
      </section>
    );
  }
  return (
    <section className="my-4">
      <div>
        <h3 className="my-2 text-2xl">List of Data</h3>
        <ul>
          {data.map((item) => (
            <li key={item.id} className="font-lg my-2">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
