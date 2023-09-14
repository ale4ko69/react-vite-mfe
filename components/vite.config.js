import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
const rootSrcPath = resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: "remote_app",
    filename: "remoteEntry.js",
    exposes: {
      "./Button": "./src/components/custom/button/",
      "./NotificationCard": "./src/components/custom/notifications_card/",
      "./Store": "./src/store/",
    },
    shared: ["react", "react-dom", "jotai", "tailwindcss"]
  })],
  resolve: {
    alias: {
      "@": rootSrcPath,
      "components": `${rootSrcPath}/components/ui`,
      "customui": `${rootSrcPath}/components/custom`
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
