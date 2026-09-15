"use client";

import { useState } from "react";
import { Calendar, ChevronRight, Newspaper, Search, Share2, User } from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const articles = [
  {
    id: 1,
    title: "Admissions Now Open for the New Academic Year",
    excerpt: "We are now accepting applications for the upcoming academic year at Wisdom Instruction School. Spaces are limited, so we encourage interested families to apply early.",
    category: "Admissions",
    date: "September 8, 2026",
    author: "School Office",
    image: "/images/school/students.svg",
    featured: true,
    content:
      "We are delighted to announce that admissions are now open for the upcoming academic year. Wisdom Instruction School welcomes applications for our nursery and primary programs. We invite prospective families to visit our school, meet our team, and learn more about joining our community. To apply, please use our online application portal on the Apply page.",
  },
  {
    id: 2,
    title: "Celebrating Cultural Diversity in Our School Community",
    excerpt: "Our students showcased the rich cultural heritage of Rwanda and beyond during our recent Cultural Day celebration.",
    category: "School Life",
    date: "September 1, 2026",
    author: "School Office",
    image: "/images/school/activities.svg",
    featured: false,
    content:
      "Our school community came together for a wonderful Cultural Day, celebrating the diverse traditions, music, dance, and customs that make our community special. It was a joyful day of learning, sharing, and unity.",
  },
  {
    id: 3,
    title: "Our Students Excel in Academic Activities",
    excerpt: "We are proud of our students' active participation and growth in academic and creative activities throughout the year.",
    category: "Achievements",
    date: "August 25, 2026",
    author: "School Office",
    image: "/images/school/classroom.svg",
    featured: false,
    content:
      "Our students continue to shine through their enthusiasm, creativity, and dedication. From classroom projects to school events, we are proud of their growth and achievements.",
  },
  {
    id: 4,
    title: "Welcoming Our New Students",
    excerpt: "A warm welcome to all the new students and families joining Wisdom Instruction School this term.",
    category: "School Life",
    date: "September 15, 2026",
    author: "School Office",
    image: "/images/school/hero.svg",
    featured: false,
    content:
      "We are thrilled to welcome our new students and their families to Wisdom Instruction School. We look forward to a wonderful year of learning and growth together.",
  },
];

const categories = ["All", "Admissions", "School Life", "Achievements"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const featured = articles.find((a) => a.featured) || articles[0];
  const filtered = articles.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <NewsHero />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {selectedArticle ? (
            <ArticleDetail article={articles.find((a) => a.id === selectedArticle)!} onBack={() => setSelectedArticle(null)} />
          ) : (
            <>
              <FadeIn>
                <SectionHeading eyebrow="News & Updates" title="Latest News From Our School" subtitle="Stay informed about everything happening at Wisdom Instruction School." />
              </FadeIn>

              {/* Featured article */}
              {activeCategory === "All" && !searchTerm && (
                <FadeIn>
                  <button
                    onClick={() => setSelectedArticle(featured.id)}
                    className="group mb-12 flex w-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl lg:grid lg:grid-cols-2"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                      <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-charcoal-dark">
                        Featured
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-10">
                      <span className="mb-3 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {featured.category}
                      </span>
                      <h2 className="mb-3 font-serif text-2xl font-bold text-charcoal-dark md:text-3xl">
                        {featured.title}
                      </h2>
                      <p className="mb-4 text-gray-600">{featured.excerpt}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {featured.author}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {featured.date}</span>
                      </div>
                    </div>
                  </button>
                </FadeIn>
              )}

              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        activeCategory === category
                          ? "bg-primary text-white"
                          : "bg-white text-gray-600 hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search news..."
                    className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:w-64"
                  />
                </div>
              </div>

              {filtered.filter((a) => a.id !== featured.id || activeCategory !== "All" || searchTerm).length === 0 ? (
                <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-200 py-16 text-center">
                  <Newspaper className="mb-4 h-12 w-12 text-gray-300" />
                  <h3 className="font-semibold text-gray-700">No news found</h3>
                  <p className="text-sm text-gray-500">Try adjusting your search or filters.</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-3">
                  {filtered
                    .filter((a) => a.id !== featured.id || activeCategory !== "All")
                    .map((article, index) => (
                      <FadeIn key={article.id} delay={index * 0.05}>
                        <button
                          onClick={() => setSelectedArticle(article.id)}
                          className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-primary">
                              {article.category}
                            </span>
                          </div>
                          <div className="flex flex-1 flex-col p-5">
                            <p className="mb-2 flex items-center gap-1.5 text-xs text-gray-500">
                              <Calendar className="h-3.5 w-3.5" /> {article.date}
                            </p>
                            <h3 className="mb-2 font-serif text-lg font-semibold text-charcoal-dark group-hover:text-primary">
                              {article.title}
                            </h3>
                            <p className="mb-3 text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                            <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-primary">
                              Read More <ChevronRight className="h-4 w-4" />
                            </span>
                          </div>
                        </button>
                      </FadeIn>
                    ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function ArticleDetail({ article, onBack }: { article: (typeof articles)[number]; onBack: () => void }) {
  return (
    <FadeIn>
      <button onClick={onBack} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
        <ChevronRight className="h-4 w-4 rotate-180" /> Back to News
      </button>
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <div className="relative aspect-[16/8] overflow-hidden">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-charcoal-dark">
            {article.category}
          </span>
        </div>
        <div className="p-8 md:p-12">
          <h1 className="mb-4 font-serif text-3xl font-bold text-charcoal-dark md:text-4xl">{article.title}</h1>
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {article.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {article.date}</span>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>{article.excerpt}</p>
            <p>{article.content}</p>
          </div>
          <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
            <span className="text-sm font-medium text-gray-600">Share:</span>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-cream transition-colors hover:bg-primary hover:text-white" aria-label="Share article">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function NewsHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <Newspaper className="h-4 w-4" />
            News
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            News & Updates
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            The latest news from the Wisdom Instruction School community.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
