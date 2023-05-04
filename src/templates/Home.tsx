import Avatar from '@/components/Avatar';
import { Button } from '@/components/Button';
import Info from '@/components/Info';
import MySkills from '@/components/MySkills';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';
import ChangeTheme from '@/components/ChangeTheme';
import clsx from 'clsx';

const texts = [
  ['10', 'Years of work experience'],
  ['50+', 'Completed projects'],
  ['20+', 'Satisfied customers'],
];

interface HomeProps {
  visible: boolean;
}

export default function Home({ visible }: HomeProps) {
  return (
    <main
      className={clsx(
        'mx-auto flex min-h-screen max-w-5xl flex-col items-center',
        !visible && 'invisible',
      )}
    >
      <ChangeTheme />
      <header className="max-w-2xl">
        <section className="flex items-center justify-center gap-10">
          <Avatar />
          <Info />
        </section>
        <section className="my-16 grid w-full grid-cols-3 ">
          {texts.map(([first, second]) => (
            <Profile first={first} second={second} key={second} />
          ))}
        </section>
        <section className="flex gap-4 ">
          <Button className="bg-orange text-gray-300 shadow-md">Download CV</Button>
          <Button className="bg-white text-gray-300 shadow-md dark:bg-bgDarkLight dark:text-gray-100">
            Contact me
          </Button>
        </section>
      </header>
      <MySkills />
      <Footer />
    </main>
  );
}
