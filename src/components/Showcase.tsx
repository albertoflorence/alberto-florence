'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

import Switch from './Switch';
import Portfolio from './Portfolio';
import Skills from './Skills';

export default function MySkills() {
  const [on, setOn] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const result = document.querySelector(
      `#showcase > div:${on ? 'last' : 'first'}-of-type`,
    )?.clientHeight;
    if (result) setHeight(result);
  }, [on]);

  const style = {
    height: `${height}px`,
  };

  return (
    <section className="w-full max-w-3xl overflow-hidden">
      <Switch on={on} onChange={setOn} />
      <section
        id="showcase"
        style={style}
        className={clsx(
          'relative flex w-[200%] items-start rounded-lg transition-transform',
          on && '-translate-x-1/2',
        )}
      >
        <Portfolio />
        <Skills />
      </section>
    </section>
  );
}
