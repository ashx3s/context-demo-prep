export default function Page() {
  return (
    <main>
      <header>
        <h1>Protected Page</h1>
        <p>Only logged in users can access this.</p>
        <p>Goal: Allow users to update their name in their account.</p>
        <p>Secondary Goal: Explore ssr vs csr errors.</p>
      </header>
    </main>
  );
}
