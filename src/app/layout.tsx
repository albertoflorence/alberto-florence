import clsx from 'clsx';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

export const metadata = {
  title: 'Alberto Florence',
  description: 'Portfolio do desenvolvedor de software Alberto Sabatier Florence',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="max-sm:text-[10px]">
      <body className={clsx(poppins.className, 'bg-bgLight p-1 dark:bg-bgDark')}>{children}</body>
    </html>
  );
}
