import type { StorybookConfig } from '@storybook/angular';
import { StorybookConfigVite } from '@storybook/builder-vite';
import { UserConfig } from 'vite';
import { viteConfig } from './vite.config.ts';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig & StorybookConfigVite = {
  stories: ['../projects/**/*.mdx', '../projects/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config: UserConfig) {
    return viteConfig(config);
  },
  staticDirs: [{ from: path.resolve(__dirname, '../public'), to: '/public' }],
  previewHead: (head) => head,
  managerHead: (head) => head
};
export default config;
