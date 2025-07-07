"use client";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Mind Link",
    color: "#5f5fff",
    desc: "Hands-free assistive technology for intuitive, independent device control using brain activity.",
    icon: "🧠",
  },
  {
    title: "Hybrid AI Models",
    color: "#a259ff",
    desc: "Combining motor imagery and SSVEP for robust, adaptable control across scenarios.",
    icon: "🤖",
  },
  {
    title: "Portable EEG Device",
    color: "#00fff0",
    desc: "Comfortable, safe, and reliable operation with invisible 1mm electrodes and real-time EEG signal processing.",
    icon: "💡",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4 relative overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#5f5fff] via-[#a259ff] to-[#00fff0] bg-clip-text text-transparent"
      >
        Solutions & Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {solutions.map((sol, i) => (
          <motion.div
            key={sol.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.2, duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.07, boxShadow: `0 0 32px ${sol.color}` }}
            className="bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center cursor-pointer transition-transform"
          >
            <div className="text-5xl mb-4 animate-bounce" style={{ color: sol.color }}>{sol.icon}</div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: sol.color }}>{sol.title}</h2>
            <p className="text-white/80 text-center">{sol.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 