import { useEffect, useState } from "react";
const useDarkTheme = () => {
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
   const colorTheme = theme === 'light' ? 'dark' : 'light';
   useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem('theme', theme);
    root.classList.remove(colorTheme);
    root.classList.add(theme);
   }, [theme]);

   return [colorTheme, setTheme];
  };
  
  export default useDarkTheme;
