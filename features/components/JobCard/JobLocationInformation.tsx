import Image from "next/image";

export function JobLocationInformation({
  city,
  country,
  state,
}: {
  city: string | null;
  country: string;
  state: string;
}) {
  return (
    <div className="flex gap-1">
      <Image
        width={18}
        height={18}
        src="/svg/location.svg"
        alt="location icon"
      />

      <p className="text-gray-600 text-center">
        {[city, state, country].filter((item) => item).join(", ")}
      </p>
    </div>
  );
}
