import { DotIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { cache } from "react";
import slugify from "slugify";

interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  createdAt: Date;
  updatedAt: Date | null;
}

const createRandomSize = function (maxSize: number) {
  const minSize = maxSize / 2;
  const randomWidth =
    minSize +
    Math.floor(
      Math.random() * (maxSize - maxSize < minSize ? minSize : maxSize)
    );
  const complimentingHeight = Math.round(randomWidth / (16 / 9));

  return `${randomWidth}/${complimentingHeight}`;
};

const createPost = (
  postPayload: Omit<
    Post,
    "slug" | "category" | "createdAt" | "image" | "updatedAt"
  >
): Post => ({
  ...postPayload,
  updatedAt: null,
  createdAt: new Date(),
  category: "finance",
  slug: slugify(postPayload.title, {
    lower: true,
    strict: true,
  }),
  image: `https://picsum.photos/${createRandomSize(1920 * 2)}`,
});

const getDemoPosts: () => Post[] = cache(() => [
  createPost({
    id: "0",
    title: "Make This Father's Day Unforgettable",
    excerpt:
      "Father’s Day is a special day to say thank you to all the dads, grandpas, and father-figures who make our lives better. In this post we share gift ideas and highlight personalized items that make memorable presents.",
  }),
  createPost({
    id: "1",
    title:
      "Stick with Success: How to Choose the Best Custom Stickers for Your Products",
    excerpt:
      "Every business knows that packaging and small touches like stickers can make a big difference. Here’s a quick guide to choosing the right sticker style and material.",
  }),
  createPost({
    id: "2",
    title:
      "Beyond the Jar: The Role of Cosmetic Packaging Boxes in Beauty Branding",
    excerpt:
      "Packaging plays a pivotal role in perceived value. Learn how premium packaging boosts customer trust and lifts conversions for beauty products.",
  }),
  createPost({
    id: "3",
    title:
      "Essential Tips from AxiomPrint for Hosting an Epic Graduation Party",
    excerpt:
      "Planning the perfect graduation party? These tips will help you nail invitations, décor, and personalized keepsakes that guests will love.",
  }),
]);

export default function BlogPage() {
  return (
    <section className="max-w-(--breakpoint-xl) mx-auto p-6 border-y border-border">
      <h3 className="text-lg font-semibold text-foreground mb-6 font-sans">
        Latest Articles
      </h3>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {getDemoPosts().map((post) => (
          <article
            key={post.id}
            className="bg-white flex flex-col border border-border rounded-lg overflow-hidden"
          >
            <div className="relative h-40 md:h-44 lg:h-36 w-full">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-4 flex flex-col grow">
              <span className="text-xs text-muted-foreground mb-2 inline-flex items-center justify-start gap-0">
                {post.category} <DotIcon /> {moment(post.createdAt).fromNow()}
              </span>
              <h4 className="text-base md:text-base font-bold font-sans text-foreground mb-2 leading-snug">
                {post.title}
              </h4>
              <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="grow pointer-events-none -mb-8">&nbsp;</div>
              <Link
                href={post.slug}
                className="text-sm font-medium text-rose-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
