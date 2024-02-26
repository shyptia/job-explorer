import { JobsPage } from "@/features/pages/JobsPage";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  
  if(!router.isReady) return null;

  return <JobsPage />;
}
