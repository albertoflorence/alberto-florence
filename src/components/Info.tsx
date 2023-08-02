import CodePen from './Icons/CodePen';
import { Github } from './Icons/Github';
import LinkedIn from './Icons/LinkedIn';

export default function Info() {
  const icons = [
    { Element: Github, key: 'github', link: 'https://github.com/albertoflorence' },
    { Element: LinkedIn, key: 'linkedIn', link: 'https://www.linkedin.com/in/albertoflorence/' },
    { Element: CodePen, key: 'codePen', link: 'https://codepen.io/albertoflorence' },
  ];
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-5xl text-gray-300 dark:text-white max-sm:text-4xl">Alberto Florence</h1>
      <p className="text-2xl text-gray-200 dark:text-gray-100">Software Engineer</p>
      <div className="flex flex-wrap gap-7">
        {icons.map(({ Element, key, link }) => (
          <a key={key} href={link} target="_blank">
            <Element
              size={35}
              className="cursor-pointer fill-gray-200 duration-300 hover:brightness-0 dark:fill-gray-100 hover:dark:brightness-200"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
