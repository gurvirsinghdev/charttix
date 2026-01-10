import { cache } from "react";
import slugify from "slugify";

export interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  body: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export const apiKey =
  "vx03r81G947cjgYxo8P5ZbSVstrklf9cNUTcTlCPDa3nrD6q6OojTaPp";

export const getImages = cache(async function () {
  const imageApiEndpoint = "https://api.pexels.com/v1/curated";

  const request = await fetch(imageApiEndpoint, {
    headers: {
      Authorization: apiKey,
    },
  });

  const response = await request.json();
  return response?.photos;
});

export const createPost = (
  postPayload: Omit<
    Post,
    "slug" | "category" | "createdAt" | "image" | "updatedAt"
  >
): Omit<Post, "image"> => ({
  ...postPayload,
  updatedAt: null,
  createdAt: new Date(),
  category: "finance",
  slug: slugify(postPayload.title, {
    lower: true,
    strict: true,
  }),
});

export const partialPosts: Omit<Post, "image">[] = [
  createPost({
    id: "0",
    title: "Make This Father's Day Unforgettable",
    excerpt:
      "Father’s Day is a special day to say thank you to all the dads, grandpas, and father-figures who make our lives better. In this post we share gift ideas and highlight personalized items that make memorable presents.",
    body: `
Father’s Day is more than just another date on the calendar. It is an opportunity to pause and recognize the quiet sacrifices, steady guidance, and everyday support that fathers and father figures provide throughout our lives. Whether it was teaching you how to ride a bike, staying up late to help with schoolwork, or simply being there when things were difficult, these moments shape who we become. Taking time to celebrate them properly sends a powerful message of gratitude and respect.

Choosing the right gift can sometimes feel overwhelming, especially when you want something meaningful rather than generic. The most memorable gifts are often those that reflect shared experiences or personal memories. A framed photo from a favorite family trip, a handwritten letter, or a customized item that references an inside joke can create an emotional connection that lasts far longer than something picked off a shelf at the last minute.

Another way to make Father’s Day special is through experiences rather than objects. Planning a day around your dad’s interests, whether that means fishing, watching a game together, or cooking his favorite meal, allows you to create new memories instead of simply exchanging items. These shared moments often become stories that families retell for years, strengthening bonds across generations.

Ultimately, Father’s Day is not about perfection or expensive gestures. It is about sincerity. A thoughtful message, genuine time together, and recognition of everything he has done can make the day truly unforgettable. When appreciation is expressed honestly, even simple actions can become deeply meaningful.
    `,
  }),
  createPost({
    id: "1",
    title:
      "Stick with Success: How to Choose the Best Custom Stickers for Your Products",
    excerpt:
      "Every business knows that packaging and small touches like stickers can make a big difference. Here’s a quick guide to choosing the right sticker style and material.",
    body: `
In today’s competitive marketplace, branding extends far beyond logos and websites. Customers notice the smallest details, from the way a package feels in their hands to how carefully it is sealed. Custom stickers may seem like a minor element, but they often serve as a first physical interaction between your brand and the customer. That first impression can influence how professional, trustworthy, and memorable your business appears.

Material selection plays a significant role in how your stickers perform in real-world conditions. Paper stickers may work well for indoor use or short-term promotions, but vinyl and laminated options offer durability against moisture, heat, and friction. If your products are shipped long distances or stored in varying environments, investing in higher-quality materials can prevent fading and peeling that could damage your brand’s image.

Design is equally important. A cluttered sticker can be confusing, while a clean and consistent design strengthens brand recognition. Colors, typography, and spacing should match your overall branding strategy. Customers should be able to recognize your business instantly, even when they see your sticker out of context on a laptop, bottle, or notebook.

Over time, well-designed stickers can become marketing tools that work on your behalf without additional cost. When customers reuse them or display them publicly, your brand gains visibility organically. Choosing the right combination of design and material ensures your stickers not only look good but continue to represent your business long after the sale is complete.
    `,
  }),
  createPost({
    id: "2",
    title:
      "Beyond the Jar: The Role of Cosmetic Packaging Boxes in Beauty Branding",
    excerpt:
      "Packaging plays a pivotal role in perceived value. Learn how premium packaging boosts customer trust and lifts conversions for beauty products.",
    body: `
The beauty industry thrives on perception, emotion, and trust. While product quality is essential, packaging often shapes the customer’s expectations before they ever try what is inside. A well-designed cosmetic box communicates professionalism, safety, and luxury, setting the tone for how the product will be experienced. In many cases, customers associate premium packaging with premium results.

Packaging also plays a crucial role in storytelling. Through colors, textures, fonts, and finishes, brands can express their identity and values. Minimalist packaging may suggest elegance and simplicity, while bold designs can communicate creativity and innovation. These visual cues help customers connect emotionally with the product and differentiate one brand from countless competitors on crowded shelves.

Beyond aesthetics, cosmetic packaging must be functional and protective. Beauty products are often sensitive to light, temperature, and impact. High-quality boxes help preserve the integrity of the product during shipping and storage, reducing the risk of damage or contamination. When customers receive an item in perfect condition, their confidence in the brand increases significantly.

As online shopping continues to grow, packaging has become part of the unboxing experience shared on social media. A thoughtfully designed box can turn an ordinary delivery into a memorable moment, encouraging customers to post photos and recommend the brand to others. In this way, packaging becomes not just a container, but a powerful marketing asset that contributes directly to brand loyalty and long-term growth.
    `,
  }),
  createPost({
    id: "3",
    title:
      "Essential Tips from AxiomPrint for Hosting an Epic Graduation Party",
    excerpt:
      "Planning the perfect graduation party? These tips will help you nail invitations, décor, and personalized keepsakes that guests will love.",
    body: `
Graduation marks the end of one chapter and the beginning of another, making it a moment worth celebrating properly. Whether it is high school or university, the achievement represents years of dedication, challenges, and personal growth. A well-planned party allows graduates to reflect on their journey while sharing their excitement with friends and family.

Invitations set the tone for the event and provide guests with their first impression. Thoughtfully designed invitations that match the graduate’s personality or school colors can create anticipation and show attention to detail. Digital invitations offer convenience, while printed ones add a tangible and personal touch that many guests appreciate.

Decorations help transform an ordinary space into a meaningful celebration. Banners, table settings, and photo displays can highlight important milestones and memories. Incorporating personalized elements such as custom signs or printed keepsakes gives guests something to remember long after the party is over. These small details often become the most cherished parts of the event.

Finally, a successful graduation party is not just about aesthetics but about atmosphere. Music, food, and meaningful conversations bring everything together. Creating a comfortable environment where people can laugh, share stories, and offer encouragement helps the graduate feel supported as they move into the next stage of life. When planned with care, the celebration becomes more than a party; it becomes a lasting memory.
    `,
  }),
];

export const buildPosts = (
  partialPosts: Omit<Post, "image">[],
  images: string[]
): Post[] => partialPosts.map((post, idx) => ({ ...post, image: images[idx] }));
