import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.blaulicht-app.app',
  appName: 'Blaulicht App',
  webDir: '../../dist/apps/app',
  bundledWebRuntime: false,
  // includePlugins: ['capacitor-flash']
};

export default config;
