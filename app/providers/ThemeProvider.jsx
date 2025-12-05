"use client";

import { ThemeProvider } from "@/app/contexts/ThemeContext";

export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

