import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, date, excerpt, slug }: Props) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug font-bold text-cafe">
        <Link href={`/posts/${slug}`} className="no-underline hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 text-gray-300">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
