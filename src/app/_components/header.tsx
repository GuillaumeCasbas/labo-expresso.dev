import { BLOG_TITLE } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  return (
    <div className="mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex items-center">
        <Link href="/" className="hover:underline">
          {BLOG_TITLE}
        </Link>
      </h2>
    </div>
  );
};

export default Header;
