'use client';
import Brightness from './Icons/Brightness';
import Moon from './Icons/Moon';
import { useTheme } from '@/hooks/useTheme';

export default function ChangeTheme() {
  const setTheme = useTheme();

  const toggleTheme = () => {
    setTheme((s) => !s);
  };

  return (
    <button
      className="my-12 cursor-pointer rounded-full p-6 duration-300 hover:bg-white/50 hover:shadow-md hover:brightness-75 hover:dark:bg-bgDarkLight/50 hover:dark:brightness-200"
      onClick={toggleTheme}
    >
      <Brightness size={40} className="hidden fill-gray-300 dark:block dark:fill-gray-100" />
      <Moon size={40} className="fill-gray-300 dark:hidden dark:fill-gray-100" />
    </button>
  );
}
