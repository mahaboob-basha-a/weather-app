import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Weather from './components/Weather';

const App = () => {
  const theme = useSelector(store=> store.theme.isDarkMode)

  useEffect(() => {
    document.body.className = theme ? 'dark-mode' : 'light-mode';
  }, [theme]);

  return (
    <div className={`h-[100vh] w-[100vw] bg-gradient-to-b from-[#fff0d7] ${theme ? 'to-slate-400' : 'to-white'} flex items-center justify-center`}>
      <Weather />
    </div>
  );
};

export default App;
