import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Integraciones
  integrations: [react()],
  
  // Configuración de Vite
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['react', 'react-dom'], // Optimiza React
    },
  },
  
  // Configuración del sitio
  site: 'https://unysolutions.com',
  output: 'static', // o 'server' si necesitas SSR
  
  // Para mejorar el rendimiento en desarrollo
  devToolbar: {
    enabled: true,
  },
});