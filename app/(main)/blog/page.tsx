import { DotIcon } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { buildPosts, getImages, partialPosts } from "./_data";

export default async function BlogPage() {
  const images = await getImages();
  const posts = buildPosts(
    partialPosts,
    images.map((image: any) => image.src.original)
  );

  return (
    <section className="max-w-(--breakpoint-xl) mx-auto p-6 border-y border-border">
      <h3 className="text-lg font-semibold text-foreground mb-6 font-sans">
        Latest Articles
      </h3>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
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
                href={"/post/" + post.slug}
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
