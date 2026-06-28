import type { CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

export function articleUrl(article: Article) {
  return `/${article.data.category}/${article.id.replace(/\.mdx?$/, "")}/`;
}

export function sortByUpdated(articles: Article[]) {
  return articles.sort(
    (a, b) => b.data.lastUpdated.getTime() - a.data.lastUpdated.getTime()
  );
}

export function statusClass(status: string) {
  return status === "Unconfirmed" ? "badge warn" : "badge";
}
