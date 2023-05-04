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
      className="my-12 cursor-pointer rounded-full bg-bgDarkLight p-6 duration-200 hover:scale-105 hover:brightness-200"
      onClick={() => setDark((s) => !s)}
    >
      {!dark ? <Brightness size={40} /> : <Moon size={40} />}
    </div>
  );
}
