import { Homepage } from "@/components/Homepage";
import client from "@/tina/__generated__/client";

export default async function Home() {
  const result = await client.queries.page({
    relativePath: "home.md",
  });

  return <Homepage {...result} />;
}
