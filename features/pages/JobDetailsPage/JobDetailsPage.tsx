import { useRouter } from "next/router";
import {
  JobEmployerNameInformation,
  JobLocationInformation,
  JobTypeInformation,
} from "@/features/components/JobCard";
import { JobDetailsSection } from "./JobDetailsSection";
import { JobHighlightsSection } from "./JobHighlightsSection";
import Link from "next/link";
import Image from "next/image";
import { JobExperienceSection } from "./JobExperienceSection";
import { JobEducationSection } from "./JobEducationSection";
import useSWR from "swr";
import { Spinner } from "@/features/components/Spinner";
import { fetcher } from "./fetcher";

export function JobDetailsPage() {
  const router = useRouter();
  const { id: jobId } = router.query;

  const { data: jobDetails, isLoading } = useSWR(
    jobId && `https://jsearch.p.rapidapi.com/job-details?job_id=${jobId}`,
    fetcher,
  );

  if (isLoading) return <Spinner />;

  return (
    jobDetails && (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button
          onClick={() => router.back()}
          className="hover:underline mb-4 block flex gap-1"
        >
          <Image
            src="/svg/back-icon.svg"
            alt="back icon"
            width={24}
            height={24}
          />
          Go back to jobs
        </button>

        <JobDetailsSection title={jobDetails?.job_title}>
          <JobEmployerNameInformation
            employerName={jobDetails?.employer_name}
            employerWebsite={jobDetails?.employer_website}
          />
          <JobTypeInformation
            employmentType={jobDetails?.job_employment_type}
            isRemote={jobDetails?.job_is_remote}
          />
          <JobLocationInformation
            city={jobDetails?.job_city}
            country={jobDetails?.job_country}
            state={jobDetails?.job_state}
          />
          {jobDetails?.job_apply_link && (
            <Link
              href={jobDetails?.job_apply_link}
              target="_blank"
              className="mt-4 inline-block py-2 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Apply
            </Link>
          )}
        </JobDetailsSection>

        <JobDetailsSection title="Job Description">
          <p>{jobDetails?.job_description}</p>
        </JobDetailsSection>

        <JobExperienceSection
          jobRequiredExperience={jobDetails?.job_required_experience}
        />

        <JobEducationSection education={jobDetails?.job_required_education} />

        {jobDetails?.job_highlights && (
          <JobHighlightsSection highlights={jobDetails.job_highlights} />
        )}
      </div>
    )
  );
}
