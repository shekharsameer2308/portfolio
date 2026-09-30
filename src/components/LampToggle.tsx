"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LampDesk, Lamp } from "lucide-react";

export default function LampToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="fixed bottom-6 right-6 w-12 h-12" />; // Placeholder
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="px-3 py-1.5 rounded-[999px] border-[1.5px] border-line bg-card text-ink font-bold text-sm shadow-sm hover:bg-bar transition-colors flex items-center gap-2"
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      <div className="relative">
        <LampDesk className={`w-4 h-4 ${isDark ? "text-soft" : "text-ink"}`} />
      </div>
      <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}
