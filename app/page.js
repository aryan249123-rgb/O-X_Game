
"use client";

import { useRouter } from "next/navigation";


export default function Buttons() {
  const router=useRouter();
  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 p-4">
      <button onClick={()=>{
        router.push("/normal")
      }} className="px-6 py-2 sm:px-7 sm:py-3 md:px-8 md:py-3 rounded-xl bg-blue-600 text-white text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto max-w-xs">
        Normal O-X
      </button>

      <button onClick={()=>{
        router.push("/extreme")
      }}  className="px-6 py-2 sm:px-7 sm:py-3 md:px-8 md:py-3 rounded-xl bg-blue-600 text-white text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto max-w-xs">
        Extreme O-X
      </button>
    </div>
  );
}

