"use client";
import { motion } from "framer-motion";

const timeline = [
  { year: "2022", event: "Cognify founded with a vision for accessible tech." },
  { year: "2023", event: "Developed Mind Link prototype and first user trials." },
  { year: "2024", event: "Launched Cognify platform and expanded solutions." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4 relative overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#5f5fff] via-[#a259ff] to-[#00fff0] bg-clip-text text-transparent"
      >
        About Cognify
      </motion.h1>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="max-w-3xl text-lg md:text-xl text-white/90 space-y-8 mb-16"
      >
        <p>
          Cognify is on a mission to empower individuals with mobility impairments through innovative, accessible, and intelligent assistive technology. Our vision is a world where everyone can interact with technology effortlessly, regardless of physical limitations.
        </p>
        <p>
          Founded by a team passionate about AI and neuroscience, Cognify is dedicated to building solutions that transform lives and open new possibilities for independence and connection.
        </p>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-[#a259ff]">Our Journey</h2>
        <div className="w-full max-w-2xl flex flex-col gap-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.2, duration: 1, ease: "easeOut" }}
              className="flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#5f5fff] via-[#a259ff] to-[#00fff0] flex items-center justify-center text-2xl font-bold text-black shadow-lg">
                {item.year}
              </div>
              <div className="text-white/90 text-lg">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
} 