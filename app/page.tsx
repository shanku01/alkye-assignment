"use client";

import dynamic from "next/dynamic";
import Header from "@/components/header";
import { useArticles } from "@/context/ArticleContext";

const ArticleCarousel = dynamic(
  () => import("@/components/ArticleCarousel"),
  { ssr: false }
);

export default function Home() {
  const { articles, loading, error } = useArticles();

  return (
    <div>
      <Header />

      <main className="py-8">
        {loading && (
          <p className="text-center text-gray-500">Loading articles...</p>
        )}
        {error && (
          <p className="text-center text-red-500">Error: {error}</p>
        )}
        {!loading && !error && articles.length === 0 && (
          <p className="text-center text-gray-500">No articles found.</p>
        )}
        {!loading && !error && articles.length > 0 && (
          <ArticleCarousel articles={articles} />
        )}
      </main>
    </div>
  );
}