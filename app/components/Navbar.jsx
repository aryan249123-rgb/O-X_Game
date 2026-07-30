"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 sm:h-16 bg-slate-900/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
          <span className="text-blue-400">O</span>
          <span className="text-slate-400">-</span>
          <span className="text-rose-400">X</span>
          {" "}
          <span className="text-sm sm:text-base md:text-lg font-medium text-slate-300">Game</span>
        </Link>

        <Link
          href="/"
          className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 group-hover:text-blue-200 transition-colors"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
          <span className="hidden sm:inline text-sm font-medium text-slate-100 group-hover:text-white">Home</span>
        </Link>
      </div>
    </nav>
  );
}
