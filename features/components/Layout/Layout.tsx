import { routes, routesLabels, routesPathnames } from "@/features/routes";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center px-20 shadow-md">
        <Link
          href={routesPathnames.jobs}
          className="flex gap-2 items-center mr-8 h-full"
        >
          <Image width={30} height={30} src="/favicon.ico" alt="logo icon" />
          <p className="text-xl font-bold">Job Explorer</p>
        </Link>

        <nav className="flex">
          {routes.map((route) => (
            <Link
              className={clsx(
                "px-5 py-4 hover:bg-cream font-medium",
                pathname && pathname.startsWith(routesPathnames[route]) &&
                  "bg-cream"
              )}
              key={route}
              href={routesPathnames[route]}
            >
              {routesLabels[route]}
            </Link>
          ))}
        </nav>
      </header>

      <main className="h-full px-20 py-10">{children}</main>
    </div>
  );
}
