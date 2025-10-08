import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  date: string;
};

export function PostHeader({ title, date }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mx-auto">
        <div className="mb-6 text-gray-400">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
