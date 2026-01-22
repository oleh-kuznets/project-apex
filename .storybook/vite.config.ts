import { default as angular } from '@analogjs/vite-plugin-angular';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { UserConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function viteConfig(config: UserConfig): Promise<UserConfig> {
  const { mergeConfig } = await import('vite');
  return mergeConfig(config, {
    define: {
      STORYBOOK_ANGULAR_OPTIONS: JSON.stringify({
        strictInjectionParameters: true,
        strictInputAccessModifiers: true,
        typeCheckHostBindings: true,
        strictTemplates: true,
      }),
    },
    server: {
      hmr: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    optimizeDeps: {
      include: ['@storybook/angular', '@angular/compiler', 'tslib'],
    },
    plugins: [
      angular({ jit: true, tsconfig: './.storybook/tsconfig.json' }),
      nodePolyfills({ protocolImports: true }),
    ],
    resolve: {
      alias: {
        '@storybook/angular': path.resolve(__dirname, '../node_modules/@storybook/angular'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          includePaths: [path.resolve(__dirname, '../styles')],
        },
      },
    },
  });
}
