'use client';

import { useState } from 'react';
import Grid from './Grid';
import Switch from './Switch';

const projects = [3, 4, 5, 6, 7, 8];
const skills = [9, 9, 9, 9, 9, 9];

export default function MySkills() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((s) => !s);

  return (
    <section className="w-full max-w-3xl">
      <Switch on={on} onChange={toggle} />
      <section className="relative flex justify-center overflow-hidden rounded-lg">
        <Grid items={projects} show={!on} />
        <Grid items={skills} show={on} />
      </section>
    </section>
  );
}
