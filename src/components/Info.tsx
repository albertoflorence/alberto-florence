import { Github } from './Icons/Github';
import LinkedIn from './Icons/LinkedIn';

export default function Info() {
  const icons = [
    { Element: Github, key: 'github' },
    { Element: LinkedIn, key: 'linkedIn' },
    { Element: Github, key: '1' },
    { Element: Github, key: '2' },
  ];
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-5xl text-gray-300 dark:text-white">Alberto Florence</h1>
      <p className="text-2xl text-gray-200 dark:text-gray-100">Software Engineer</p>
      <div className="flex gap-9">
        {icons.map(({ Element, key }) => (
          <Element
            key={key}
            size={35}
            className="cursor-pointer fill-gray-200 duration-300 hover:brightness-0 dark:fill-gray-100 hover:dark:brightness-200"
          />
        ))}
      </div>
    </div>
  );
}
