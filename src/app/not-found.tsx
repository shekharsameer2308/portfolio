import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans p-4 md:p-8 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-medium tracking-tight text-white">404</h1>
        <p className="text-xl text-zinc-400">System node not found.</p>
        <div className="pt-4">
          <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Return to root
          </Link>
        </div>
      </div>
    </main>
  );
}
