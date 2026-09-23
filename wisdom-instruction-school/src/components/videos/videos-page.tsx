"use client";

import { useState } from "react";
import { Play, Video } from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const videos = [
  {
    id: "tour",
    title: "School Tour",
    description: "Take a guided tour of Wisdom Instruction School and see our campus, classrooms, and facilities.",
    category: "School Tour",
    poster: "/images/photos/tour-poster.jpg",
    videoUrl: "/videos/school-tour.mp4",
    featured: true,
  },
  {
    id: "welcome",
    title: "Welcome Message",
    description: "A warm welcome from the Wisdom Instruction School community.",
    category: "School",
    poster: "/images/school/hero.svg",
    videoUrl: "",
    featured: false,
  },
  {
    id: "activities",
    title: "Our Activities",
    description: "A glimpse into the exciting activities our students enjoy.",
    category: "Activities",
    poster: "/images/school/activities.svg",
    videoUrl: "",
    featured: false,
  },
  {
    id: "facilities",
    title: "Our Facilities",
    description: "Explore the modern facilities that support student learning.",
    category: "School",
    poster: "/images/school/classroom.svg",
    videoUrl: "",
    featured: false,
  },
  {
    id: "graduation",
    title: "Celebrations & Events",
    description: "Special moments and celebrations at our school.",
    category: "Events",
    poster: "/images/school/students.svg",
    videoUrl: "",
    featured: false,
  },
];

const categories = ["All", "School Tour", "School", "Events", "Activities"];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const filteredVideos = videos.filter(
    (video) => activeCategory === "All" || video.category === activeCategory
  );

  return (
    <div>
      <VideosHero />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured video */}
          <FadeIn>
            <div className="mb-12 grid items-center gap-8 lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl">
                {playingVideo === activeVideo.id && activeVideo.videoUrl ? (
                  <video
                    className="h-full w-full"
                    controls
                    autoPlay
                    poster={activeVideo.poster}
                  >
                    <source src={activeVideo.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <img
                      src={activeVideo.poster}
                      alt={`${activeVideo.title} thumbnail`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <button
                        onClick={() => setPlayingVideo(activeVideo.id)}
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform hover:scale-110"
                        aria-label={`Play ${activeVideo.title} video`}
                      >
                        <Play className="ml-1 h-8 w-8 text-primary" />
                      </button>
                    </div>
                    {!activeVideo.videoUrl && (
                      <div className="absolute inset-x-0 bottom-0 bg-black/60 p-3 text-center text-xs text-white">
                        Video coming soon
                      </div>
                    )}
                  </>
                )}
              </div>
              <div>
                <span className="mb-3 inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                  Featured Video
                </span>
                <h2 className="mb-3 font-serif text-2xl font-bold text-charcoal-dark md:text-3xl">
                  {activeVideo.title}
                </h2>
                <p className="text-gray-600">{activeVideo.description}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <SectionHeading eyebrow="Video Center" title="Watch Our Videos" />
          </FadeIn>

          <div className="mb-8 flex flex-wrap gap-2">
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video, index) => (
              <FadeIn key={video.id} delay={index * 0.05}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="relative block aspect-video w-full overflow-hidden"
                  >
                    <img
                      src={video.poster}
                      alt={`${video.title} thumbnail`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
                        <Play className="ml-0.5 h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-primary">
                      {video.category}
                    </span>
                  </button>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-dark">{video.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{video.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function VideosHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <Video className="h-4 w-4" />
            Video Center
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            School Videos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Watch our school tour and videos exploring life at Wisdom Instruction School.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
