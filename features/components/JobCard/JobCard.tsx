import Image from "next/image";
import Link from "next/link";

export function JobCard({
  id,
  title,
  city,
  country,
  logo,
  employerName,
  employerWebsite,
  employmentType,
  remote,
}: {
  id: string;
  title: string;
  city: string | null;
  country: string;
  employerName: string;
  logo: string | null;
  employerWebsite: string | null;
  employmentType: string;
  remote: boolean;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md px-4 py-6 hover:shadow-lg flex flex-col items-center justify-center">
      {logo && <img src={logo} alt={`${employerName} logo`} className="mb-1" />}

      <h2 className="text-lg font-semibold mb-1 text-center">{title}</h2>

      {employerWebsite ? (
        <Link className="mb-4 underline" href={employerWebsite}>
          {employerName}
        </Link>
      ) : (
        <p className="text-gray-600 text-center mb-4">{employerName}</p>
      )}

      <div className="flex gap-1">
        <Image
          width={18}
          height={18}
          src="/svg/location.svg"
          alt="location icon"
        />
        {city && <p className="text-gray-600 text-center">{city + ", "}</p>}
        {country && <p className="text-gray-600 text-center">{country}</p>}
      </div>

      <div className="flex gap-1 mb-3">
        <Image width={18} height={18} src="/svg/job.svg" alt="location icon" />
        {employmentType && (
          <p className="text-gray-600 text-center">{employmentType + ", "}</p>
        )}
        <p className="text-gray-600 text-center">
          {remote ? "Remote" : "Not remote"}
        </p>
      </div>

      <div className="w-full flex justify-between items-center gap-3">
        <button className="px-3 py-1">
          <Image
            src="/svg/heart-outline.svg"
            alt="heart icon"
            width={32}
            height={32}
          />
        </button>
        <Link
          href={`job-details/${id}`}
          className="h-8 px-3 flex items-center bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
