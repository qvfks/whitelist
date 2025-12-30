export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: 24 }}>
      <h1>Whitelist Server</h1>
      <ul>
        <li><a href="/whitelist.txt">/whitelist.txt</a> (raw text)</li>
        <li><a href="/api/whitelist">/api/whitelist</a> (raw text via API)</li>
        <li><a href="/api/check?u=robloxusername&k=key">/api/check?u=...&k=...</a> (validate)</li>
      </ul>
      <p>Edit <code>data/whitelist.txt</code> to update entries.</p>
    </main>
  );
}
