import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPublichedPosts } from "@/lib/api";
import { PostList } from "./_components/post-list";
import { EmptyPostList } from "./_components/posts-list-empty";

export default function Index() {
  const publishedPosts = getAllPublichedPosts();

  return (
    <main>
      <Container>
        <Intro />
        {publishedPosts.length > 0 ? (
          <PostList posts={publishedPosts} />
        ) : <EmptyPostList />}
      </Container>
    </main>
  );
}
