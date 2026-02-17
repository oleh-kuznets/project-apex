import { addons, State } from 'storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme,
  layoutCustomisations: {
    showPanel: (_state: State, _defaultValue: boolean) => false,
    showToolbar: (_state: State, _defaultValue: boolean) => false,
  }
})