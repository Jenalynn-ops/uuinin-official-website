import { headers } from "next/headers";
import PcHome from "@/components/PcHome";
import MobileHome from "@/components/MobileHome";
export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /Mobile|Android|iP(hone|od|ad)/.test(userAgent);
  return isMobile ? <MobileHome /> : <PcHome />;
}
