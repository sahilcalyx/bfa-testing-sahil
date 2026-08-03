import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactCompiler temporarily disabled — was hanging webpack compile of the large SPA shell
  // reactCompiler: true,
  // Hide the floating Next.js "N / Issues" badge (clutters mobile preview)
  devIndicators: false,
  compiler: {
    styledComponents: true,
  },
  outputFileTracingRoot: __dirname,
  turbopack: {
    resolveAlias: {
      "react-helmet": "./lib/react-helmet-proxy.js",
    },
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Replace react-helmet with proxy to avoid client-side title/meta overrides
      "react-helmet": path.resolve(__dirname, "lib", "react-helmet-proxy.js"),
      // On the server, provide a safe shim for odometer to avoid `document` usage
      ...(isServer
        ? {
            odometer: path.resolve(__dirname, "lib", "odometer-server-shim.js"),
          }
        : {}),
    };
    return config;
  },

};

export default nextConfig;
