
"use client";

import { useRouter } from "next/navigation";


export default function Buttons() {
  const router=useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center gap-12">
      <button onClick={()=>{
        router.push("/normal")
      }} className="px-8 py-3 rounded-xl bg-blue-600 text-white text-lg font-semibold shadow-lg">
        Normal O-X
      </button>

      <button onClick={()=>{
        router.push("/extreme")
      }}  className="px-8 py-3 rounded-xl bg-blue-600 text-white text-lg font-semibold shadow-lg">
        Extreme O-X
      </button>
    </div>
  );
}

