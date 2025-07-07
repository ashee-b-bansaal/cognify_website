"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Motor Imagery Recognition",
    desc: "Users control devices by imagining limb movements, detected by the EEG device.",
    color: "#5f5fff",
    icon: "🧠",
  },
  {
    title: "SSVEP Command Selection",
    desc: "Quickly select commands by focusing on flickering visual targets.",
    color: "#a259ff",
    icon: "👁️",
  },
  {
    title: "Hybrid AI Processing",
    desc: "Combines both methods for robust, real-time, and personalized control.",
    color: "#00fff0",
    icon: "🤖",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4 relative overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#5f5fff] via-[#a259ff] to-[#00fff0] bg-clip-text text-transparent"
      >
        How It Works
      </motion.h1>
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-12 mt-8">
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 1, ease: "easeOut" }}
              className="bg-white/5 rounded-xl p-6 border-l-4 shadow-md flex items-center gap-4"
              style={{ borderColor: step.color }}
            >
              <span className="text-3xl" style={{ color: step.color }}>{step.icon}</span>
              <div>
                <h2 className="text-xl font-bold mb-1" style={{ color: step.color }}>{i + 1}. {step.title}</h2>
                <p className="text-white/80">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          {/* Animated 3D/process diagram placeholder */}
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#5f5fff]/60 via-[#a259ff]/60 to-[#00fff0]/60 flex items-center justify-center animate-pulse shadow-2xl">
            <span className="text-3xl font-bold text-white/80">[Diagram]</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 