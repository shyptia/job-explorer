import { JobHighlights } from "@/features/types";
import { JobDetailsSection } from "./JobDetailsSection";

export function JobHighlightsSection({highlights}: { highlights: JobHighlights }) {
  return (
    <JobDetailsSection title="Job Highlights">
      <JobHighlightsInformation
        highlights={highlights?.Qualifications}
        title="Qualifications"
      />
      <JobHighlightsInformation
        highlights={highlights?.Responsibilities}
        title="Responsibilities"
      />
      <JobHighlightsInformation
        highlights={highlights?.Benefits}
        title="Benefits"
      />
    </JobDetailsSection>
  );
}

function JobHighlightsInformation({highlights, title}: { highlights?: string[]; title: string }) {
  return (
    highlights && (
      <div className="mb-3">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <ul className="list-disc pl-6">
          {highlights.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>
    )
  );
}
