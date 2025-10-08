import { BLOG_SLOGAN, BLOG_TITLE } from "@/lib/constants";

export function Intro() {
  return (
    <section className="items-center md:justify-between mt-4 md:mt-16 mb-12">
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-cafe">
        {BLOG_TITLE}
      </h1>
      <div className="md:text-lg font-semibold">
        {BLOG_SLOGAN}
      </div>
    </section>
  );
}
