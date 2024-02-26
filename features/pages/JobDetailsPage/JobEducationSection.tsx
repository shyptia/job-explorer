import { RequiredEducation } from "@/features/types";
import { JobDetailsSection } from "./JobDetailsSection";
import { renderYesNoValue } from "./renderYesNoValue";

export function JobEducationSection({education} : {education?: RequiredEducation}){
  return (
    <JobDetailsSection title="Required Education">
      <p>Degree mentioned: {renderYesNoValue(education?.degree_mentioned)}</p>
      <p>Degree preferred: {renderYesNoValue(education?.degree_preferred)}</p>
      <p>
        Professional certification mentioned:{" "}
        {renderYesNoValue(education?.professional_certification_mentioned)}
      </p>
    </JobDetailsSection>
  );
}