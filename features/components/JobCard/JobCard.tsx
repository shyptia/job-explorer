import { Job } from "@/features/types";
import { useLikedJobsStore } from "@/features/zustand";
import Image from "next/image";
import Link from "next/link";
import { JobEmployerNameInformation } from "./JobEmployerNameInformation";
import { JobLocationInformation } from "./JobLocationInformation";
import { JobTypeInformation } from "./JobTypeInformation";

export function JobCard({ job }: { job: Job }) {
  const {
    job_id: jobId,
    employer_logo: logo,
    employer_name: employerName,
    job_title: title,
    employer_website: employerWebsite,
    job_city: city,
    job_country: country,
    job_employment_type: employmentType,
    job_is_remote: isRemote,
    job_state: state,
  } = job;
  const { likedJobs, addJob, removeJob } = useLikedJobsStore();
  const isJobSelected = likedJobs.some((job) => job.job_id === jobId);

  return (
    <div className="h-[310px] bg-white rounded-[20px] shadow-md px-4 py-6 hover:shadow-lg flex flex-col items-center justify-between">
      {logo && (
        <img src={logo} alt={`${employerName} logo`} className="h-14 mb-1" />
      )}

      <h2
        title={title}
        className="text-lg font-semibold mb-1 text-center line-clamp-2"
      >
        {title}
      </h2>

      <JobEmployerNameInformation
        employerName={employerName}
        employerWebsite={employerWebsite}
      />

      <JobLocationInformation city={city} country={country} state={state} />

      <JobTypeInformation employmentType={employmentType} isRemote={isRemote} />

      <div className="w-full flex justify-between items-center gap-3">
        <button
          className="px-3 py-1"
          onClick={() => (isJobSelected ? removeJob(jobId) : addJob(job))}
        >
          <Image
            src={
              isJobSelected ? "/svg/heart-fill.svg" : "/svg/heart-outline.svg"
            }
            alt="heart icon"
            width={32}
            height={32}
          />
        </button>

        <Link
          href={`/job-details/${jobId}`}
          className="h-8 px-3 flex items-center bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
