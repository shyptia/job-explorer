import { JobsPage } from "@/features/pages/JobsPage";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  if (Object.keys(router.query).length !== 0 && !router.isReady) return null;

  return <JobsPage />;
}
