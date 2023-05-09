import Image from 'next/image';
import { useState } from 'react';
import Stories from './Stories';

export default function Avatar() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div
        onClick={() => setOpen(true)}
        className="relative flex h-52 w-52 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border-[3px] border-orange bg-white"
      >
        <Image
          src="/images/avatar.jpg"
          width={192}
          height={192}
          priority
          alt="Um retrato de um homem"
          className="rounded-full"
        />
      </div>
      <Stories open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
