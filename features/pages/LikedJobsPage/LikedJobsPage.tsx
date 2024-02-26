import { JobList } from "@/features/components/JobList.tsx";
import { routesPathnames } from "@/features/routes";
import { useLikedJobsStore } from "@/features/zustand";
import clsx from "clsx";
import Link from "next/link";

export function LikedJobsPage() {
  const { likedJobs } = useLikedJobsStore();

  return (
    <div
      className={clsx(
        "h-full",
        likedJobs.length === 0 && "flex items-center justify-center"
      )}
    >
      {likedJobs.length === 0 ? (
        <h2 className="text-gray-20 text-center text-2xl font-bold">
          You haven&apos;t liked any jobs yet. Please visit the{" "}
          <Link href={routesPathnames.jobs} className="text-blue-10 underline">
            job listings page
          </Link>{" "}
          and select the ones you like.
        </h2>
      ) : (
        <>
          <h1 className="text-center text-3xl font-bold mb-8">
            Preferred Job Listings
          </h1>
          <JobList jobsData={likedJobs} />
        </>
      )}
    </div>
  );
}
