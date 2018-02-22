import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

export interface ThemeInterface {
  primaryColor: string;
}

export const theme = {
  primaryColor: '#ff6c7a'
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<
    ThemeInterface
  >;

export { css, injectGlobal, keyframes, ThemeProvider };

export default styled;
