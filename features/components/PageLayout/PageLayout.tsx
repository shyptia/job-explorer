import clsx from "clsx";
import { ReactNode } from "react";

export function PageLayout({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col items-center", className)}>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {children}
    </div>
  );
}
