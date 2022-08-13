import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@react-pdf/renderer":
        mode === "development" ? "tools/rnw_shim" : "tools/rnw_shim.ts",
    },
  },
}));
