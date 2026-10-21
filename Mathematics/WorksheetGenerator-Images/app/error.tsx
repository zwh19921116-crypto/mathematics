"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("App route error:", error);
  }, [error]);

  return (
    <main style={{ fontFamily: "Public Sans, Segoe UI, sans-serif", padding: 24 }}>
      <h2 style={{ marginTop: 0 }}>Something went wrong</h2>
      <p>Please try again. If this keeps happening, restart the worksheet resource server.</p>
      <button
        type="button"
        onClick={() => reset()}
        style={{ border: 0, borderRadius: 10, padding: "10px 14px", background: "#0f6b5f", color: "#fff", fontWeight: 700 }}
      >
        Try again
      </button>
    </main>
  );
}
