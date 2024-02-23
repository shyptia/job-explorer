import { routes, routesLabels, routesPathnames } from "@/features/routes";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <header className="flex justify-between items-center px-20">
        <Link href={routesPathnames.jobs} className="flex gap-2 items-center">
          <Image width={30} height={30} src="/favicon.ico" alt="logo icon" />
          <p>Job Explorer</p>
        </Link>

        <nav className="flex">
          {routes.map((route) => (
            <Link
              className={clsx(
                "px-5 py-4 hover:bg-cream",
                pathname.startsWith(routesPathnames[route]) && "bg-cream"
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
