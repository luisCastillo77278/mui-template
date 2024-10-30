import { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';

const useMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useMode theme');
  }
  return context;
};

export default useMode;
