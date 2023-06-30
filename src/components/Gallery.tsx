'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import RightArrow from './Icons/RightArrow';
import LeftArrow from './Icons/LeftArrow';
import clsx from 'clsx';

interface GalleryProps {
  items: Item[];
  initialIndex: number;
}

interface Item {
  image?: string;
  video?: string;
}

export default function Gallery({ items, initialIndex }: GalleryProps) {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    setCurrent(initialIndex);
  }, [initialIndex]);

  const { video } = items[current];

  return (
    <section className=" select-none overflow-hidden rounded-xl">
      <video muted src={video} controls />
      <button
        aria-label="previous"
        className={clsx(
          'absolute -left-12 top-1/2 -translate-y-1/2 text-white hover:opacity-100 max-2xl:left-0 max-xl:opacity-60',
          current <= 0 && 'hidden',
        )}
        onClick={() => setCurrent(current - 1)}
      >
        <LeftArrow size={48} />
      </button>
      <button
        className={clsx(
          'absolute -right-12 top-1/2 -translate-y-1/2 text-white hover:opacity-100 max-2xl:right-0 max-xl:opacity-60',
          current >= items.length - 1 && 'hidden',
        )}
        aria-label="next"
        onClick={() => setCurrent(current + 1)}
      >
        <RightArrow size={48} />
      </button>
    </section>
  );
}
