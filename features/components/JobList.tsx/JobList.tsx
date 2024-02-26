import { Job } from "@/features/types";
import { JobCard } from "../JobCard";

export function JobList({ jobsData }: { jobsData: Job[] }) {
  return (
    <div className="grid grid-cols-[270px] gap-6 justify-center md:grid-cols-[270px_270px] lg:grid-cols-[270px_270px_270px]">
      {jobsData.map((job) => (
        <JobCard key={job.job_id} job={job} />
      ))}
    </div>
  );
}
