import { JobList } from "@/features/components/JobList.tsx";
import { PageLayout } from "@/features/components/PageLayout";
import { routesPathnames } from "@/features/routes";
import { useLikedJobsStore } from "@/features/zustand";
import Link from "next/link";

export function LikedJobsPage() {
  const { likedJobs } = useLikedJobsStore();

  return (
    <PageLayout
      title="Preferred Jobs"
      className="pb-10"
    >
      {likedJobs.length === 0 ? (
        <h2 className="text-gray-20 text-center text-2xl font-semibold">
          You haven&apos;t liked any jobs yet. Please visit the{" "}
          <Link href={routesPathnames.jobs} className="text-blue-10 underline">
            job listings page
          </Link>{" "}
          and select the ones you like.
        </h2>
      ) : (
        <JobList jobsData={likedJobs} />
      )}
    </PageLayout>
  );
}
