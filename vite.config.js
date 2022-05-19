import { ViteEjsPlugin } from "vite-plugin-ejs"

export default {
  plugins: [
    ViteEjsPlugin(({ server, env }) => {
      return {
        isDev: env.DEV,
        local: env.VITE_APP_LOCAL || false,
        appUrl: env.VITE_APP_URL || 'https://codetorial-app.netlify.app',
        title: env.VITE_APP_TITLE || 'Codetorial',
        faviconUrl: env.VITE_APP_FAVICON_URL || '/favicon.png',
        baseUrl: env.VITE_APP_BASE_URL || `http://localhost:${server.port}`
      }
    }),
  ]
}
