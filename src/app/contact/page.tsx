"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4 relative overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#5f5fff] via-[#a259ff] to-[#00fff0] bg-clip-text text-transparent"
      >
        Contact Cognify
      </motion.h1>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="bg-white/5 rounded-2xl shadow-xl p-8 max-w-lg w-full flex flex-col gap-6 border border-[#5f5fff]/20"
      >
        <motion.input
          whileFocus={{ scale: 1.03, boxShadow: "0 0 16px #5f5fff" }}
          type="text"
          placeholder="Your Name"
          className="rounded-lg px-4 py-3 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#5f5fff] transition"
        />
        <motion.input
          whileFocus={{ scale: 1.03, boxShadow: "0 0 16px #a259ff" }}
          type="email"
          placeholder="Your Email"
          className="rounded-lg px-4 py-3 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259ff] transition"
        />
        <motion.textarea
          whileFocus={{ scale: 1.03, boxShadow: "0 0 16px #00fff0" }}
          placeholder="Your Message"
          rows={5}
          className="rounded-lg px-4 py-3 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00fff0] transition resize-none"
        />
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 24px #00fff0" }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mt-2 rounded-lg bg-gradient-to-r from-[#5f5fff] via-[#a259ff] to-[#00fff0] py-3 font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Send Message
        </motion.button>
      </motion.form>
    </main>
  );
} 