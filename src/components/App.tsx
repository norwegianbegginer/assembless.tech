import React from 'react';
import { LitteraProvider } from 'react-littera';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';

import { LOCALES } from "utils/language";
import { LIGHT_THEME, DARK_THEME } from "utils/theme";
import Routes from "./Routes";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      !prefersDarkMode ? LIGHT_THEME : DARK_THEME,
    [prefersDarkMode],
  );

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <LitteraProvider initialLocale="en_US" locales={LOCALES}>
          <Router>
            <Routes />
          </Router>
        </LitteraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
