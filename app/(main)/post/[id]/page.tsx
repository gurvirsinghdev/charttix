import { notFound } from "next/navigation";
import { buildPosts, getImages, partialPosts } from "../../blog/_data";
import { DotIcon, Clock } from "lucide-react";
import moment from "moment";

type PostPageParams = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostDetailPage({ params }: PostPageParams) {
  const { id } = await params;

  const images = await getImages();
  const posts = buildPosts(
    partialPosts,
    images.map((image: any) => image.src.original)
  );

  const currentPost = posts.find((post) => post.slug === id);

  if (!currentPost) return notFound();

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="max-w-(--breakpoint-xl) mx-auto p-6 border-y border-border">
        {/* Featured Image */}
        <div
          style={{
            backgroundImage: `url("${currentPost.image}")`,
          }}
          className="w-full bg-cover bg-center h-[420px] flex items-end rounded-2xl overflow-hidden"
        >
          <h1 className="text-3xl p-4 from-black/0 to-black bg-gradient-to-b bg-blend-screen text-white md:text-5xl font-bold leading-tight">
            {currentPost.title}
          </h1>
        </div>

        {/* Content Section */}
        <section className="max-w-(--breakpoint-xl) mx-auto px-6 mt-14">
          <article className="mx-auto max-w-(--breakpoint-xl) prose prose-lg prose-slate">
            <div
              dangerouslySetInnerHTML={{
                __html: currentPost.body
                  .trim()
                  .split("\n\n")
                  .map((p) => `<p>${p.trim()}</p>`)
                  .join(""),
              }}
            />
          </article>
        </section>
      </section>
    </main>
  );
}
