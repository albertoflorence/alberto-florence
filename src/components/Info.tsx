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
      <h1 className="text-5xl text-white">Alberto Florence</h1>
      <p className="text-2xl text-gray-100">Software Engineer</p>
      <div className="flex gap-9">
        {icons.map(({ Element, key }) => (
          <Element key={key} size={35} className="cursor-pointer hover:brightness-200" />
        ))}
      </div>
    </div>
  );
}
