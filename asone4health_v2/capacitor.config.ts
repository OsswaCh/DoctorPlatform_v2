import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'asone4health_v2',
  webDir: 'build',
  server: {
    url: 'http://localhost:3000',
    cleartext: true
  },
};

export default config;
