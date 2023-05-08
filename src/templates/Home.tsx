import Avatar from '@/components/Avatar';
import { Button } from '@/components/Button';
import Info from '@/components/Info';
import Showcase from '@/components/Showcase';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';
import ChangeTheme from '@/components/ChangeTheme';
import clsx from 'clsx';
import AboutMe from '@/components/AboutMe';

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
        <Profile />
        <section className="flex gap-4 ">
          <Button className="bg-orange text-gray-300 shadow-md">Download CV</Button>
          <AboutMe />
        </section>
      </header>
      <Showcase />
      <Footer />
    </main>
  );
}
