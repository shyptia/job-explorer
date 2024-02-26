import Link from "next/link";

export function JobEmployerNameInformation({
  employerWebsite,
  employerName,
}: {
  employerWebsite: string | null;
  employerName: string;
}) {
  return employerWebsite ? (
    <Link className="mb-4 underline" href={employerWebsite}>
      {employerName}
    </Link>
  ) : (
    <p className="text-gray-600  mb-4">{employerName}</p>
  );
}
