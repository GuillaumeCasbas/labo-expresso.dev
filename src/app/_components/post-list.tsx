import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  return (
    <section className="mb-10">
      <div className="grid grid-cols-1 lg:gap-x-32 gap-y-16 md:gap-y-18">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
