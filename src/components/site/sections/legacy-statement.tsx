"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { UNSPLASH_IMAGES } from "@/lib/constants/images";

export function LegacyStatement() {
  return (
    <section
      id="company"
      className="relative z-20 -mt-8 px-4 pb-12 pt-4 sm:-mt-12 sm:px-6 sm:pb-16 sm:pt-6 md:-mt-16 md:pb-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl overflow-hidden  px-7 py-10  sm:rounded-3xl sm:px-12 sm:py-14 md:px-14 md:py-16 lg:rounded-[2.5rem] lg:px-16 lg:py-18">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: OUR PURPOSE & Headline */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-400">
                OUR PURPOSE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="skcl-editorial mt-5 text-3xl font-normal leading-[1.08] tracking-tight text-[#111827] sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem]"
            >
              Spaces that
              <br />
              empower people
              <br />
              and progress.
            </motion.h2>
          </div>

          {/* Center Column: Paragraph & Story Action */}
          <div className="lg:col-span-4 lg:pl-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[0.95rem] leading-[1.72] text-[#4B5563] sm:text-base"
            >
              For over two decades, SKCL has been shaping Chennai&apos;s
              commercial landscape with future-ready workspaces, long-term
              partnerships and uncompromising execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10"
            >
              <a
                href="#developments"
                className="group inline-flex items-center gap-3.5 transition-colors"
              >
                <span className="text-sm font-medium text-[#111827] transition-colors group-hover:text-gold">
                  Our story
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D1D5DB] text-[#374151] transition-all duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-soft-white group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Handwritten Annotation & Architectural Line Sketch */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-3 lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
            >
              {/* Handwritten script note */}
              <div className="absolute -top-3 right-0 z-10 -rotate-[6deg] select-none pointer-events-none sm:-top-4 sm:right-2">
                <span className="skcl-handwriting text-2xl font-normal leading-[1.05] tracking-wide text-[#64748B] sm:text-3xl">
                  We build
                  <br />
                  for what&apos;s next
                </span>
              </div>

              {/* Architectural concept sketch */}
              <div className="relative aspect-[4/3] w-full pt-4 sm:aspect-square">
                <Image
                  src={UNSPLASH_IMAGES.purposeSketch.url}
                  alt={UNSPLASH_IMAGES.purposeSketch.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
