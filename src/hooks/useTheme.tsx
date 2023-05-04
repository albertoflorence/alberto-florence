import { getStorageItem, setStorageItem } from '@/utils/localStorage';
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<boolean>(getTheme());

  useEffect(() => {
    disableAnimation();
    document.documentElement.classList.toggle('dark', theme);
    saveTheme(theme);
  }, [theme]);

  return setTheme;
};

const getTheme = () => {
  try {
    const isDark =
      ('theme' in localStorage && getStorageItem('theme')) ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return Boolean(isDark);
  } catch {
    return false;
  }
};

const saveTheme = (value: boolean) => {
  return setStorageItem('theme', value);
};

//next-themes
const disableAnimation = () => {
  const css = document.createElement('style');
  css.appendChild(
    document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
    ),
  );
  document.head.appendChild(css);

  // Force restyle
  (() => window.getComputedStyle(document.body))();

  // Wait for next tick before removing
  setTimeout(() => {
    document.head.removeChild(css);
  }, 1);
};
