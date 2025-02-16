import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

//nous modifions ce fichier pour que vite puisse écouter sur tous les host (localhost et l'adresse ip de la machine) et uniqument sur le port 5173
export default defineConfig({
  plugins: [react()], //ajoute le plugin react

  server: {
    host: "0.0.0.0", // Ecouter sur toutes les interfaces
    port: 5173, // Ou toute autre port si tu veux spécifier un autre port
  },
});

/*export default {
  server: {
    host: "0.0.0.0", // Ecouter sur toutes les interfaces
    port: 5173, // Ou toute autre port si tu veux spécifier un autre port
  },
};*/
