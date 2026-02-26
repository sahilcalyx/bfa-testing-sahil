export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f3f4f6',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '1.5rem' }}>Page Not Found</h2>
      <p style={{ color: '#4b5563', marginBottom: '2rem', textAlign: 'center', maxWidth: '28rem' }}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a 
        href="/" 
        style={{ 
          padding: '0.75rem 1.5rem', 
          backgroundColor: '#2563eb', 
          color: 'white', 
          borderRadius: '0.375rem', 
          textDecoration: 'none'
        }}
      >
        Go Back Home
      </a>
    </div>
  )
}