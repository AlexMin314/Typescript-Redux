import * as styledComponents from 'styled-components';
// import { ThemedStyledComponentsModule, ThemedStyledFunction } from 'styled-components';
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

// type StyledFunction<T> = ThemedStyledFunction<T, ThemeInterface>;
//
// const withProps =
//   <TProps, U extends HTMLElement = HTMLElement>(
//     styledFunction: StyledFunction<React.HTMLProps<U>>
//   ): StyledFunction<TProps & React.HTMLProps<U>> => styledFunction;

// const withProps =
//   <TProps, U extends HTMLElement = HTMLElement>(
//     styledFunction: ThemedStyledFunction<any, any>,
//   ): ThemedStyledFunction<TProps & React.HTMLProps<U>, any> => {
//     return styledFunction;
//   };

// function withProps<U>() {
//   return <P, T, O>(
//     fn: ThemedStyledFunction<P, T, O>,
//   ): ThemedStyledFunction<P & U, T, O & U> =>
//     fn as ThemedStyledFunction<P & U, T, O & U>;
// }

export { css, injectGlobal, keyframes, ThemeProvider };

export default styled;
