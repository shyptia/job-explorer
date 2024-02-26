import { ReactNode } from "react";

export function JobDetailsSection({title, children}: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      {children}
    </section>
  );
}
