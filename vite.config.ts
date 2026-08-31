import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Tự động dùng / trên Vercel / local và /StudyQuest/ khi build qua GitHub Actions cho GitHub Pages
  base: process.env.BASE_PATH || (process.env.GITHUB_ACTIONS ? "/StudyQuest/" : "/"),
});
