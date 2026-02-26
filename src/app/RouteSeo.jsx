"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteSeo() {
  const pathname = usePathname() || "/";
  
  // Listen for route changes from the App component
  useEffect(() => {
    const handleRouteChange = (event) => {
      // Handle route change if needed
      console.log('Route changed to:', event.detail);
    };
    
    window.addEventListener('app-route-change', handleRouteChange);
    
    return () => {
      window.removeEventListener('app-route-change', handleRouteChange);
    };
  }, []);
  
  // Note: In Next.js App Router with generateMetadata, SEO is handled server-side
  // This component is kept for backward compatibility and any client-side needs
  return null;
}