"use client";

import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight, Camera, Search } from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const galleryImages = [
  { src: "/images/photos/school-campus.jpg", alt: "School campus at Wisdom Instruction School", category: "School" },
  { src: "/images/photos/school-building.jpg", alt: "School building at Wisdom Instruction School", category: "School" },
  { src: "/images/photos/assembly.jpg", alt: "Morning assembly at Wisdom Instruction School", category: "Activities" },
  { src: "/images/photos/road-to-school.jpg", alt: "Road leading to Wisdom Instruction School", category: "School" },
  { src: "/images/photos/tour-poster.jpg", alt: "School tour at Wisdom Instruction School", category: "School" },
  { src: "/images/school/students.svg", alt: "Students at Wisdom Instruction School", category: "Students" },
  { src: "/images/school/classroom.svg", alt: "Classroom at Wisdom Instruction School", category: "Classrooms" },
  { src: "/images/school/activities.svg", alt: "School activities", category: "Activities" },
  { src: "/images/school/nursery.svg", alt: "Nursery students", category: "Students" },
  { src: "/images/school/playground.svg", alt: "School playground", category: "Facilities" },
  { src: "/images/school/school-building.svg", alt: "School building illustration", category: "School" },
  { src: "/images/school/computer-lab.svg", alt: "Computer laboratory", category: "Facilities" },
  { src: "/images/school/library.svg", alt: "School library", category: "Facilities" },
  { src: "/images/school/teacher-1.svg", alt: "Teacher at Wisdom Instruction School", category: "Teachers" },
  { src: "/images/school/teacher-2.svg", alt: "Teacher portrait", category: "Teachers" },
  { src: "/images/school/teacher-3.svg", alt: "Teacher portrait", category: "Teachers" },
  { src: "/images/school/teacher-4.svg", alt: "Teacher portrait", category: "Teachers" },
];

const categories = ["All", "School", "Classrooms", "Students", "Teachers", "Facilities", "Activities"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    return galleryImages.filter((image) => {
      const matchesCategory = activeCategory === "All" || image.category === activeCategory;
      const matchesSearch = image.alt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };
  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div>
      <GalleryHero />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="School Gallery"
              title="Our School in Pictures"
              subtitle="Explore the beautiful moments and places that make Wisdom Instruction School special."
            />
          </FadeIn>

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
                placeholder="Search gallery..."
                className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:w-64"
              />
            </div>
          </div>

          {filteredImages.length === 0 ? (
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-200 py-16 text-center">
              <Camera className="mb-4 h-12 w-12 text-gray-300" />
              <h3 className="font-semibold text-gray-700">No images found</h3>
              <p className="text-sm text-gray-500">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
            </div>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filteredImages.map((image, index) => (
                <FadeIn key={image.src + index} className="mb-4 break-inside-avoid">
                  <button
                    onClick={() => setLightboxIndex(index)}
                    className="group relative block w-full overflow-hidden rounded-2xl"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <div>
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                          {image.category}
                        </span>
                        <p className="mt-1 text-sm font-medium text-white">{image.alt}</p>
                      </div>
                    </div>
                  </button>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close image viewer"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-5xl">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-[85vh] w-auto rounded-2xl object-contain"
              />
              <p className="mt-4 text-center text-sm text-white">
                {filteredImages[lightboxIndex].alt} ({lightboxIndex + 1} of {filteredImages.length})
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <Camera className="h-4 w-4" />
            Gallery
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            School Gallery
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            A visual journey through the life and spaces of Wisdom Instruction School.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
