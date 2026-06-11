import Link from "next/link";
import type { Article } from "@/context/ArticleContext";

export default function ArticleBox({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.id}/details`}
      className="relative flex flex-col items-start w-full h-[500px] sm:h-[750px] lg:h-[1000px] rounded-[71px] px-6 sm:px-[69px] py-12 sm:py-[95px] gap-[10px] overflow-hidden transition-shadow hover:shadow-xl"
      style={{
        backgroundImage: `url(${article.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <span className="relative z-10 flex flex-row items-center justify-center h-[52px] px-[40px] py-[10px] gap-[10px] bg-black rounded-[40px] text-xs font-semibold text-white article-box-prompt">
        {article.prompt}
      </span>
      <p
        className="relative z-10 w-full max-w-[718px] text-white font-medium leading-[1.3] line-clamp-4 article-box-description"
      >
        {article.short_description}
      </p>
    </Link>
  );
}
