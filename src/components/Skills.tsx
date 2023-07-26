import Grid from './Grid';
import { Github } from './Icons/Github';
import Css from './Technologies/Css';
import Express from './Technologies/Express';
import Html from './Technologies/Html';
import Javascript from './Technologies/Javascript';
import Jest from './Technologies/Jest';
import Nextjs from './Technologies/Nextjs';
import Nodejs from './Technologies/Nodejs';
import ReactImage from './Technologies/ReactImage';
import Redux from './Technologies/Redux';
import Tailwind from './Technologies/Tailwind';
import Typescript from './Technologies/Typescript';

export default function Skills() {
  return (
    <Grid
      items={skills.map(({ Skill, link, title }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          title={title}
          aria-label={title}
          className="block scale-75 fill-slate-600 transition-transform hover:scale-90 dark:fill-gray-50"
        >
          {<Skill />}
        </a>
      ))}
      cols="3"
    />
  );
}

const skills = [
  { Skill: Nextjs, link: 'https://nextjs.org', title: 'Next.js' },
  { Skill: ReactImage, link: 'https://react.dev', title: 'React' },
  { Skill: Jest, link: 'https://jestjs.io', title: 'Jest' },
  { Skill: Redux, link: 'https://redux.js.org', title: 'Redux' },
  { Skill: Tailwind, link: 'https://tailwindcss.com', title: 'Tailwind' },
  { Skill: Typescript, link: 'https://www.typescriptlang.org', title: 'Typescript' },
  { Skill: Nodejs, link: 'https://nodejs.org', title: 'Node.js' },
  { Skill: Express, link: 'https://expressjs.com', title: 'Express' },
  { Skill: Github, link: 'https://github.com', title: 'Github' },
  { Skill: Javascript, link: 'https://javascript.com', title: 'Javascript' },
  { Skill: Css, link: 'https://www.css3.com', title: 'CSS' },
  { Skill: Html, link: 'https://html5.org/', title: 'HTML' },
];
