"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import BubblesBackground from "@/components/BubblesBackground";



export default function Home() {
  // Generate animated particle data only once on the client
  const particles = useMemo(() =>
    Array.from({ length: 18 }).map(() => ({
      cx: Math.random() * 1440,
      cy: Math.random() * 900,
      r: Math.random() * 3 + 2,
      opacity: 0.18 + Math.random() * 0.2,
      values: `${Math.random() * 900};${Math.random() * 900};${Math.random() * 900}`,
      dur: `${6 + Math.random() * 6}s`,
    })),
    []
  );

  const [burst, setBurst] = useState(false);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-black">
      {/* Animated Bubbles Background */}
      <BubblesBackground bubbleCount={14} />
      {/* Hero Section */}
      <section id="home" className="z-10 flex flex-col items-center justify-center min-h-[80vh] w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 relative"
        >
          {/* Minimal glowing shadow */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[300px] rounded-full bg-gradient-to-r from-[#5f5fff]/20 via-[#a259ff]/15 to-[#5f5fff]/20 blur-xl opacity-60 z-0"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          {/* Particle burst on hover */}
          {burst && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 0,
                    scale: 2,
                    x: 120 * Math.cos((i / 12) * 2 * Math.PI),
                    y: 120 * Math.sin((i / 12) * 2 * Math.PI),
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{
                    background:
                      i % 3 === 0
                        ? "#5f5fff"
                        : i % 3 === 1
                        ? "#a259ff"
                        : "#00fff0",
                  }}
                  className="w-4 h-4 rounded-full shadow-lg"
                />
              ))}
            </div>
          )}
          <motion.div
            whileHover={{ scale: 1.02, filter: "drop-shadow(0 0 24px #a259ff)" }}
            onHoverStart={() => {
              setBurst(true);
              setTimeout(() => setBurst(false), 700);
            }}
            className="relative z-10 cursor-pointer"
          >
            <Image
              src="/cognify-logo.png"
              alt="Cognify Logo"
              width={600}
              height={338}
              priority
              className="mx-auto drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-2xl md:text-3xl text-white/80 max-w-2xl text-center mb-8"
        >
          Empowering minds. Transforming possibilities.<br />
          Hands-free assistive technology for a smarter, more accessible world.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#5f5fff] via-[#a259ff] to-[#5f5fff] text-black font-bold text-lg shadow-xl transition-transform duration-200 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#a259ff]/40"
        >
          Get in Touch
        </motion.a>
      </section>
      {/* Overview Section */}
      <section id="overview" className="w-full flex flex-col items-center py-24 px-4 relative">
        <motion.h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#5f5fff] via-[#a259ff] to-[#5f5fff] bg-clip-text text-transparent text-center">Overview</motion.h2>
        <div className="max-w-3xl text-lg md:text-xl text-white/90 text-center mb-8">
          <p>Cognify: A hands-free assistive technology designed to empower individuals with mobility impairments by enabling intuitive and independent control of devices using brain activity.</p>
          <p className="mt-4"><span className="font-bold text-[#a259ff]">Target Audience:</span> Individuals with paralysis or severe mobility impairments.</p>
        </div>
      </section>
      {/* Key Features & Core Technology */}
      <section id="features" className="w-full flex flex-col items-center py-16 px-4 relative">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#a259ff]">Key Features & Core Technology</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-[#5f5fff]/30 flex flex-col items-center">
            <span className="text-4xl mb-2">🧠</span>
            <h3 className="text-xl font-bold mb-2 text-[#5f5fff]">Motor Imagery Recognition</h3>
            <p className="text-white/90">Allows users to control devices by imagining limb movements.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-[#a259ff]/30 flex flex-col items-center">
            <span className="text-4xl mb-2">👁️</span>
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">SSVEP</h3>
            <p className="text-white/90">Enables quick command selection by focusing on flickering visual targets.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-[#5f5fff]/30 flex flex-col items-center">
            <span className="text-4xl mb-2">🤖</span>
            <h3 className="text-xl font-bold mb-2 text-[#5f5fff]">Hybrid AI Models</h3>
            <p className="text-white/90">Combines motor imagery and SSVEP for robust and adaptable control across scenarios.</p>
          </div>
        </div>
      </section>
      {/* Advantages */}
      <section id="advantages" className="w-full flex flex-col items-center py-16 px-4 relative">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#5f5fff]">Advantages</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="bg-white/5 rounded-xl p-6 border-l-4 border-[#5f5fff] shadow-md text-white">
            <h3 className="font-bold mb-2">Minimally-Invasive</h3>
            <p className="opacity-90">No surgical procedures or bulky implants required.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border-l-4 border-[#a259ff] shadow-md text-white">
            <h3 className="font-bold mb-2">Low Latency & High Reliability</h3>
            <p className="opacity-90">Real-time responsiveness for seamless device control.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border-l-4 border-[#a259ff] shadow-md text-white">
            <h3 className="font-bold mb-2">Adaptable AI Models</h3>
            <p className="opacity-90">Personalized control tailored to individual needs.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border-l-4 border-[#5f5fff] shadow-md text-white">
            <h3 className="font-bold mb-2">Affordable Solution</h3>
            <p className="opacity-90">Cost-effective compared to traditional assistive technologies.</p>
          </div>
        </div>
      </section>
      {/* Design & Applications */}
      <section id="design-applications" className="w-full flex flex-col items-center py-16 px-4 relative">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#a259ff]">Design & Applications</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-[#5f5fff]/30">
            <h3 className="text-xl font-bold mb-2 text-[#5f5fff]">Design</h3>
            <ul className="list-disc ml-6 text-white/90">
              <li>Portable EEG device with invisible 1mm electrodes for user comfort.</li>
              <li>Safe and reliable operation using EEG signals.</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-[#a259ff]/30">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">Applications</h3>
            <ul className="list-disc ml-6 text-white/90">
              <li>Hands-free control of wheelchairs and smart devices.</li>
              <li>Interaction with VR/AR environments.</li>
              <li>Brain-controlled shortcuts for daily tasks like managing lights, doors, and communication.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Market Potential & Development Goals */}
      <section id="market-goals" className="w-full flex flex-col items-center py-16 px-4 relative">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#5f5fff]">Market Potential & Development Goals</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-[#a259ff]/30">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">Market Potential</h3>
            <ul className="list-disc ml-6 text-white/90">
              <li>Over 5 million wheelchair users in the U.S. and a growing global population with severe motor disabilities.</li>
              <li>The Brain-Computer Interface (BCI) market is projected to grow from $2 billion in 2023 to $6.2 billion by 2030.</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg border border-[#5f5fff]/30">
            <h3 className="text-xl font-bold mb-2 text-[#5f5fff]">Development Goals</h3>
            <ul className="list-disc ml-6 text-white/90">
              <li><span className="font-bold">Short-Term:</span> Test control algorithms in the Cornell EEG Lab and sell software subscriptions.</li>
              <li><span className="font-bold">Mid-Term:</span> Develop next-gen EEG hardware and conduct large-scale testing.</li>
              <li><span className="font-bold">Long-Term:</span> Integrate the solution into assistive devices and expand its benefits to the general public.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="w-full flex flex-col items-center py-16 px-4 relative">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#a259ff]">Team</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
          <div className="bg-white/5 rounded-2xl p-6 shadow-lg border border-[#5f5fff]/30 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-1 text-[#5f5fff]">Alan Wu</h3>
            <p className="text-white/80 text-center">Neuroscience major at Cornell, experienced in epilepsy monitoring systems.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 shadow-lg border border-[#a259ff]/30 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-1 text-[#a259ff]">Ashee B Bansaal</h3>
            <p className="text-white/80 text-center">CS and ECE major at Cornell, developed patented AI technology for women's safety.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 shadow-lg border border-[#5f5fff]/30 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-1 text-[#5f5fff]">Sidhya Pathak</h3>
            <p className="text-white/80 text-center">CS major at UVA, proficient in AI and signal processing.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 shadow-lg border border-[#5f5fff]/30 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-1 text-[#5f5fff]">Natalie Yeung</h3>
            <p className="text-white/80 text-center">CE and BME major at Cornell, presented research on gait analysis in Huntington's disease.</p>
          </div>
        </div>
      </section>
      {/* Collaboration & Investment */}
      <section id="collaboration" className="w-full flex flex-col items-center py-16 px-4 relative">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#5f5fff]">Collaboration & Investment</motion.h2>
        <div className="max-w-3xl text-lg md:text-xl text-white/90 text-center mb-8">
          <p>Seeking pilot partners to test and refine the technology.<br />
          Inviting collaborators from neuroscience, engineering, and user experience fields.<br />
          Encouraging investment to accelerate development and deployment.</p>
        </div>
        <div className="text-xl font-bold text-[#a259ff] mt-4">Cognify aims to revolutionize independence for individuals with mobility impairments, offering transformative technology that enhances quality of life.</div>
      </section>

    </main>
  );
}
