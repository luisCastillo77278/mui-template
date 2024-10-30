import PropTypes from 'prop-types';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeContext } from '../../../context/themeContext';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { lightTheme } from '../config/lightTheme';
import { darkTheme } from '../config/darkTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const MODE = {
  DARK: 'dark',
  LIGHT: 'light',
};

Object.freeze(MODE);

const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(MODE.LIGHT);

  const setSwitchMode = useCallback(() => {
    if (mode === MODE.LIGHT) {
      setMode(MODE.DARK);
    } else if (mode === MODE.DARK) {
      setMode(MODE.LIGHT);
    }
  }, [mode]);

  const value = useMemo(() => {
    return {
      mode,
      setSwitchMode,
    };
  }, [mode, setSwitchMode]);

  const theme = useMemo(
    () => (mode === MODE.LIGHT ? lightTheme : darkTheme),
    [mode],
  );

  useEffect(() => {
    console.log({ prefersDarkMode });
    setMode(prefersDarkMode ? MODE.DARK : MODE.LIGHT);
  }, [prefersDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
