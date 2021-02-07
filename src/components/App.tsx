import React from 'react';
import { LitteraProvider } from 'react-littera';
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';

import { LOCALES } from "utils/language";
import { LIGHT_THEME, DARK_THEME } from "utils/theme";
import Routes from "./Routes";

import Appbar from 'components/common/Appbar'
import Footer from 'components/common/Footer'
import About from "components/common/About";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      !prefersDarkMode ? LIGHT_THEME : DARK_THEME,
    [prefersDarkMode],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LitteraProvider initialLocale="en_US" locales={LOCALES}>
          <Router>
            <Appbar />
            <Routes />
            <Footer />
          </Router>
        </LitteraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
