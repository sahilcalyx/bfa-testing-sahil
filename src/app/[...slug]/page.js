import { getSeoForPath } from "../../seo/seo.config";
import ClientPage from "./ClientPage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  return getSeoForPath(path);
}

export default function CatchAllPage() {
  return <ClientPage />;
}