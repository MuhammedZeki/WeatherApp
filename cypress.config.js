import { defineConfig } from 'cypress';

export default defineConfig({
  // VİTE VE REACT İÇİN EKLENMESİ GEREKEN KISIM
  component: {
    // Bileşenlerin hangi sunucuda ve nasıl çalışacağını tanımlar
    devServer: {
      framework: 'react', // Kullanılan framework (React)
      bundler: 'vite',    // Kullanılan paketleyici (Vite)
    },
    // Bileşen test dosyalarının nerede olduğunu belirtir (Genellikle src içinde olur)
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      // Bileşen testleri için node olayları buraya gelir
    },
  },

  // VAR OLAN E2E AYARLARINIZ
  e2e: {
    setupNodeEvents(on, config) {
      // E2E olayları buraya gelir
    },
  },
});