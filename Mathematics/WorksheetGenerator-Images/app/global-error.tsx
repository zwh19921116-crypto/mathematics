"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Public Sans, Segoe UI, sans-serif", background: "#f2f6f9", color: "#0f2433" }}>
        <main style={{ maxWidth: 760, margin: "40px auto", padding: 24, background: "#fff", border: "1px solid #d6e1e8", borderRadius: 12 }}>
          <h1 style={{ marginTop: 0 }}>Application Error</h1>
          <p>An unexpected error occurred while rendering this page.</p>
          <pre style={{ whiteSpace: "pre-wrap", background: "#f8fbfd", border: "1px solid #d6e1e8", borderRadius: 8, padding: 10 }}>{error.message}</pre>
          <button
            type="button"
            onClick={() => reset()}
            style={{ border: 0, borderRadius: 10, padding: "10px 14px", background: "#0f6b5f", color: "#fff", fontWeight: 700 }}
          >
            Retry
          </button>
        </main>
      </body>
    </html>
  );
}
