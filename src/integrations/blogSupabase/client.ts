import { createClient } from "@supabase/supabase-js";

const BLOG_SUPABASE_URL =
  import.meta.env.VITE_BLOG_SUPABASE_URL ?? "https://vanghdqlgjefedqhlsqo.supabase.co";
const BLOG_SUPABASE_ANON_KEY =
  import.meta.env.VITE_BLOG_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhbmdoZHFsZ2plZmVkcWhsc3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NTg4NzAsImV4cCI6MjA5NDIzNDg3MH0.RFBJoDV6TobX8OypkQ7LIDtgOciUhUeXIZfCEtm7Fgk";

export const blogSupabase = createClient(BLOG_SUPABASE_URL, BLOG_SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  images: string[] | null;
  published_at: string | null;
  is_published: boolean;
}

export const formatBlogDate = (iso: string | null) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
};
