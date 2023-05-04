'use client';

import { useEffect, useState } from 'react';
import Brightness from './Icons/Brightness';
import Moon from './Icons/Moon';

export default function ChangeTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark');
  }, [dark]);
  return (
    <div
      className="my-12 cursor-pointer rounded-full p-6 duration-300 hover:bg-white/50 hover:shadow-md hover:brightness-75 hover:dark:bg-bgDarkLight/50 hover:dark:brightness-200"
      onClick={() => setDark((s) => !s)}
    >
      {!dark ? (
        <Brightness size={40} className="fill-gray-300 dark:fill-gray-100" />
      ) : (
        <Moon size={40} className="fill-gray-300 dark:fill-gray-100" />
      )}
    </div>
  );
}
