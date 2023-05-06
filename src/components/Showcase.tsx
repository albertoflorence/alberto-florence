'use client';

import { useState } from 'react';
import clsx from 'clsx';

import Switch from './Switch';
import Portfolio from './Portfolio';
import Skills from './Skills';

export default function MySkills() {
  const [on, setOn] = useState(false);

  return (
    <section className="w-full max-w-3xl overflow-hidden">
      <Switch on={on} onChange={setOn} />
      <section
        className={clsx(
          'relative flex w-[200%] items-start rounded-lg transition-transform',
          on ? '-translate-x-1/2 max-md:h-[1000px] max-sm:h-full' : 'max-sm:h-[1400px]',
        )}
      >
        <Portfolio />
        <Skills />
      </section>
    </section>
  );
}
