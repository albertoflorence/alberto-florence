'use client';

import { useState } from 'react';
import Grid from './Grid';
import Switch from './Switch';
import Image from 'next/image';
import clsx from 'clsx';
import Nextjs from './Technologies/Nextjs';
import ReactImage from './Technologies/ReactImage';
import Jest from './Technologies/Jest';
import Redux from './Technologies/Redux';
import Tailwind from './Technologies/Tailwind';
import Typescript from './Technologies/Typescript';
import Nodejs from './Technologies/Nodejs';
import Express from './Technologies/Express';
import { Github } from './Icons/Github';

export default function MySkills() {
  const [on, setOn] = useState(false);

  return (
    <section className="w-full max-w-3xl overflow-hidden">
      <Switch on={on} onChange={setOn} />
      <section
        className={clsx(
          !on && '-translate-x-1/2',
          'transition-transform',
          'relative flex w-[200%] rounded-lg',
        )}
      >
        <Grid
          items={skills.map(({ Skill, link, title }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              title={title}
              className="block scale-75 fill-slate-600 transition-transform hover:scale-90 dark:fill-gray-50"
            >
              {<Skill />}
            </a>
          ))}
          cols="3"
        />
        <Grid
          items={projects.map(({ image, link, title }) => (
            <a key={image} href={link} target="_blank">
              <Image
                title={title}
                src={`/images/${image}`}
                alt={title}
                fill
                className={clsx('fill-black transition-transform hover:scale-110')}
              />
            </a>
          ))}
          cols="2"
        />
      </section>
    </section>
  );
}

const projects = [
  { image: 'Group 3.jpg', link: '#', title: '' },
  { image: 'Group 4.jpg', link: '#', title: '' },
  { image: 'Group 5.jpg', link: '#', title: '' },
  { image: 'Group 6.jpg', link: '#', title: '' },
  { image: 'Group 7.jpg', link: '#', title: '' },
  { image: 'Group 8.jpg', link: '#', title: '' },
];

const skills = [
  { Skill: Nextjs, link: '', title: 'Next.js' },
  { Skill: ReactImage, link: '', title: 'React' },
  { Skill: Jest, link: '', title: 'Jest' },
  { Skill: Redux, link: '', title: 'Redux' },
  { Skill: Tailwind, link: '', title: 'Tailwind' },
  { Skill: Typescript, link: '', title: 'Typescript' },
  { Skill: Nodejs, link: '', title: 'Node.js' },
  { Skill: Express, link: '', title: 'Express' },
  { Skill: Github, link: '', title: 'Github' },
];
