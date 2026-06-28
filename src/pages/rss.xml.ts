import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { articleUrl, sortByUpdated } from "../utils/articles";

export async function GET(context: { site: string | URL }) {
  const articles = sortByUpdated(await getCollection("articles"));
  return rss({
    title: "MECCHA CHAMELEON Help MVP",
    description: "Unofficial community-reported help pages for MECCHA CHAMELEON.",
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.lastUpdated,
      link: articleUrl(article)
    }))
  });
}
