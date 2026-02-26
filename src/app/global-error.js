"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#f3f4f6',
          fontFamily: 'sans-serif'
        }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>Oops!</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '1.5rem' }}>Something went wrong!</h2>
          <p style={{ color: '#4b5563', marginBottom: '2rem', textAlign: 'center', maxWidth: '28rem' }}>
            An unexpected error occurred. Please try again later.
          </p>
          <button 
            onClick={() => reset()}
            style={{ 
              padding: '0.75rem 1.5rem', 
              backgroundColor: '#2563eb', 
              color: 'white', 
              borderRadius: '0.375rem', 
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}