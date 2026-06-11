"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type Article = {
  id: number;
  title: string;
  created_at: string;
  prompt: string;
  short_description: string;
  content: string;
  image_url: string;
};

type ArticleContextType = {
  articles: Article[];
  loading: boolean;
  error: string | null;
  getArticleById: (id: number) => Article | undefined;
};

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

const API_URL = "https://alkyetest-738240239910.us-central1.run.app/myapp/list/";

export function ArticleProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        setArticles(Array.isArray(data) ? data : data.results ?? []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  const getArticleById = useCallback(
    (id: number) => articles.find((a) => a.id === id),
    [articles]
  );

  return (
    <ArticleContext.Provider value={{ articles, loading, error, getArticleById }}>
      {children}
    </ArticleContext.Provider>
  );
}

export function useArticles() {
  const ctx = useContext(ArticleContext);
  if (!ctx) throw new Error("useArticles must be used within ArticleProvider");
  return ctx;
}
