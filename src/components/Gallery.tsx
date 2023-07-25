'use client';
import { useEffect, useState } from 'react';
import RightArrow from './Icons/RightArrow';
import LeftArrow from './Icons/LeftArrow';
import clsx from 'clsx';

interface GalleryProps {
  items: Item[];
  initialIndex: number;
  onClose?: () => void;
}

interface Item {
  image?: string;
  video?: string;
}

let timeout: NodeJS.Timeout;

export default function Gallery({ items, initialIndex, onClose }: GalleryProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [show, setShow] = useState(true);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    setCurrent(initialIndex);
  }, [initialIndex]);

  const handleInteraction = () => {
    setShow(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setShow(false);
    }, 2500);
  };

  const { video } = items[current];
  const hideControls = clsx(
    !show && !isPaused && 'max-2xl:opacity-0',
    'transition-opacity duration-700',
  );

  return (
    <section
      className="select-none overflow-hidden rounded-xl text-white"
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
      onMouseLeave={() => setShow(false)}
    >
      <video
        muted
        src={video}
        controls
        onPause={() => setIsPaused(true)}
        onPlay={() => {
          setIsPaused(false);
          handleInteraction();
        }}
      />
      <button
        aria-label="previous"
        className={clsx(
          'absolute -left-16 top-1/2 -translate-y-1/2 max-2xl:left-0',
          current <= 0 && 'hidden',
          hideControls,
        )}
        onClick={() => setCurrent(current - 1)}
      >
        <LeftArrow size={48} />
      </button>
      <button
        className={clsx(
          'absolute -right-16 top-1/2 -translate-y-1/2 max-2xl:right-0',
          current >= items.length - 1 && 'hidden',
          hideControls,
        )}
        aria-label="next"
        onClick={() => setCurrent(current + 1)}
      >
        <RightArrow size={48} />
      </button>
      <button
        className={clsx(
          'lg-2xl:hidden absolute right-[16px] top-[22px] cursor-pointer text-2xl font-bold text-white',
          hideControls,
        )}
        onClick={onClose}
      >
        X
      </button>
    </section>
  );
}
