import { useEffect, useState } from "react";
import useSWR from "swr";
import { JobList } from "@/features/components/JobList.tsx";
import { useDebounce } from "@/features/hooks";
import Image from "next/image";
import { Spinner } from "@/features/components/Spinner";
import { fetcher } from "./fetcher";
import { useRouter } from "next/router";
import { Pagination } from "@/features/components/Pagination";
import { PageLayout } from "@/features/components/PageLayout";

export function JobsPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(
    Number(router.query.page) || 1
  );
  const [searchQuery, setSearchQuery] = useState(router.query.search || "");
  const debounceSearchQuery = useDebounce(searchQuery, 500);
  const profileDesiredJob =
    typeof window !== "undefined" && localStorage.getItem("desiredJobTitle");

  const searchUrl = debounceSearchQuery
    ? `https://jsearch.p.rapidapi.com/search?page=${currentPage}&query=${debounceSearchQuery}`
    : profileDesiredJob
    ? `https://jsearch.p.rapidapi.com/search?page=${currentPage}&query=${profileDesiredJob}`
    : null;

  const { data: jobsData, isLoading, error } = useSWR(searchUrl, fetcher);

  useEffect(() => {
    setCurrentPage(1);
    router.replace({
      query: { ...router.query, page: 1 },
    });
  }, [debounceSearchQuery]);

  return (
    <PageLayout title="Jobs page" className="space-y-6 pb-10">
      <input
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
          router.replace({
            query: { ...router.query, search: event.target.value },
          });
        }}
        type="text"
        name="searchInput"
        className="block w-full px-4 py-2 border mx-auto border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />

      {error && (
        <div className="flex gap-2 text-gray-20 text-center text-2xl font-bold justify-center">
          <Image width={24} height={24} alt="error icon" src="/svg/error.svg" />
          An error occurred. Please try again.
        </div>
      )}

      {isLoading && <Spinner />}

      {(!jobsData || !jobsData.length) && !isLoading && !error && (
        <div className="text-gray-20 text-center text-2xl font-bold">
          {!profileDesiredJob && !debounceSearchQuery
            ? "Please enter your search query"
            : "We couldn't find any results for your request."}
        </div>
      )}

      {jobsData && <JobList jobsData={jobsData} />}

      <Pagination
        currentPage={currentPage}
        nextButtonIsDisabled={!jobsData || !jobsData.length}
        onPageChange={(value) => {
          setCurrentPage(value);
          router.replace({
            query: { ...router.query, page: value },
          });
        }}
      />
    </PageLayout>
  );
}
