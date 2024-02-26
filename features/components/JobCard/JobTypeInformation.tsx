import Image from "next/image";

export function JobTypeInformation({
  employmentType,
  isRemote,
}: {
  employmentType: string;
  isRemote: boolean;
}) {
  return (
    <div className="flex gap-1 mb-3">
      <Image width={18} height={18} src="/svg/job.svg" alt="location icon" />
      {employmentType && (
        <p className="text-gray-600 text-center">{employmentType + ", "}</p>
      )}
      <p className="text-gray-600 text-center">
        {isRemote ? "Remote" : "Not remote"}
      </p>
    </div>
  );
}
