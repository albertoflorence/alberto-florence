import Image from 'next/image';
import { useState } from 'react';
import Stories from './Stories';

export default function Avatar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative">
      <div
        className="relative flex h-52 w-52 shrink-0 cursor-pointer items-center justify-center rounded-full"
        onClick={() => setOpen(true)}
      >
        <Image
          src="/images/avatar.jpg"
          width={180}
          height={180}
          priority
          alt="Um retrato de um homem"
          className="rounded-full"
        />
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          className="avatar-loader"
        >
          <circle cx="50" cy="50" r="48" />
        </svg>
      </div>
      <Stories open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
