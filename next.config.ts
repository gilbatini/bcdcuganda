import type { NextConfig } from "next";

// Old PHP URLs from the previous site, kept alive so links and search results still work.
const legacy: Record<string, string> = {
  "/index.php": "/",
  "/about_us.php": "/about",
  "/programs.php": "/programs",
  "/our_staff.php": "/staff",
  "/achivements.php": "/achievements",
  "/achievements.php": "/achievements",
  "/contact_us.php": "/contact",
};

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    qualities: [75],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return Object.entries(legacy).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
