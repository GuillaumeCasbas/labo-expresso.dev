import Container from "@/app/_components/container";
import { AUTHOR, BLOG_TITLE } from "@/lib/constants";
import Link from "next/link";
import { SocialIcon } from "./social-icon";
import { SocialIconName } from "@/interfaces/author";

export function Footer() {
  return (
    <footer className="border-t-1 border-slate-700">
      <Container>
        <div className="mt-10 mb-3 flex flex-col items-center">
          <div className="mb-6 flex space-x-4">
            {AUTHOR.socials.map((social) => (
              <SocialIcon
                name={social.name as SocialIconName}
                link={social.value}
                key={social.name}
              />
            ))}
          </div>
          <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            {`© ${new Date().getFullYear()} `}
            <Link href="/" className="font-semibold underline hover:text-cafe">
              {BLOG_TITLE}
            </Link>
            {" par "}
            <a
              href={AUTHOR.website}
              target="_blank"
              className="underline font-semibold hover:text-cafe"
            >
              {AUTHOR.name}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
