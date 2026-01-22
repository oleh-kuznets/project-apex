import type { StorybookConfig } from '@storybook/angular';
import { StorybookConfigVite } from '@storybook/builder-vite';
import { UserConfig } from 'vite';
import { viteConfig } from './vite.config.ts';

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
};
export default config;
