import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';      // plugin that allows linter to auto-run whenever you 'build' the app

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(),
  eslint({
    lintOnStart: true,                        // linter will run at build time
    failOnError: mode === "production"        // linter errors will NOT prevent app from running!
  })
],
server: {
  open: true                                  // has Vite open apps in browser window automatically when run
}
}))
