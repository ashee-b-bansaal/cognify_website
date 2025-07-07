"use client";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-black shadow-lg fixed top-0 left-0 z-50">
      <a href="/" className="text-2xl font-extrabold bg-gradient-to-r from-[#5f5fff] via-[#a259ff] to-[#5f5fff] bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform">Cognify</a>
      <div className="flex gap-6 text-lg font-semibold">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`text-white hover:text-[#5f5fff] transition-colors ${pathname === link.href ? "underline underline-offset-8 text-[#5f5fff]" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
} 