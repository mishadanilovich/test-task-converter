import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { theme, Theme } from './theme';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme as Theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
