"use client";

import useEmblaCarousel from "embla-carousel-react";
import ArticleBox from "@/components/articleBox";
import type { Article } from "@/context/ArticleContext";

export default function ArticleCarousel({ articles }: { articles: Article[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {articles.map((article) => (
            <div className="embla__slide" key={article.id}>
              <ArticleBox article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
