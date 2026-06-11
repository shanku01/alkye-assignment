"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useArticles } from "@/context/ArticleContext";
import Header from "@/components/header";

export default function ArticleDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { getArticleById, loading } = useArticles();
  const article = getArticleById(id);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-gray-500">Article not found.</p>
        <Link href="/" className="text-[black] hover:underline">
          &larr; Back to articles
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-[black] rounded-full text-white bg-black m-2 sm:m-[20px] text-[18px] px-[10px] hover:underline"
      >
        &larr; Back to articles
      </Link>
      <Header/>
      <div className="aspect-[16/9] overflow-hidden bg-gray-100 w-full mb-6">
          <img
            src={article.image_url}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>
    <article className="w-full rounded-lg bg-white shadow-md px-4 sm:px-[100px] lg:px-[200px] mt-[44px]">

        <span className="inline-block rounded-full bg-[#000000] px-[40] py-[10px] text-[24px] font-medium text-[#ffffff] px-2 py-1 mb-[44px]">
          {article.prompt}
        </span>

        <p className="aritcle-desc">{article.short_description}</p>

        <div className="whitespace-pre-line leading-relaxed article-content">
          {article.content}
        </div>
      </article>
    </div>
  );
}
