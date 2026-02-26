import HomeClient from "./HomeClient";

export async function generateMetadata() {
  const { getSeoForPath } = await import("../seo/seo.config");
  return getSeoForPath("/");
}

export default function Home() {
  return (
    <>
      <HomeClient />
    </>
  );
}
