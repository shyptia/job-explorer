import { RequiredExperience } from "@/features/types";
import { JobDetailsSection } from "./JobDetailsSection";
import { renderYesNoValue } from "./renderYesNoValue";

export function JobExperienceSection({
  jobRequiredExperience,
}: {
  jobRequiredExperience?: RequiredExperience;
}) {
  return (
    <JobDetailsSection title="Required Experience">
      <p>
        No experience required:{" "}
        {renderYesNoValue(jobRequiredExperience?.no_experience_required)}
      </p>
      <p>
        Experience mentioned:{" "}
        {renderYesNoValue(jobRequiredExperience?.experience_mentioned)}
      </p>
      <p>
        Experience preferred:{" "}
        {renderYesNoValue(jobRequiredExperience?.experience_preferred)}
      </p>
      {jobRequiredExperience?.required_experience_in_months && (
        <p>
          Required experience in months:{" "}
          {jobRequiredExperience.required_experience_in_months}
        </p>
      )}
    </JobDetailsSection>
  );
}
