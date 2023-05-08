import Image from 'next/image';
import Modal from './Modal';
import { useState } from 'react';

export default function Avatar() {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div
        onClick={() => setShow(true)}
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
      <Story show={show} onClose={() => setShow(false)} />
    </section>
  );
}

interface StoryProps {
  show: boolean;
  onClose: () => void;
}

function Story({ show, onClose }: StoryProps) {
  const stories = [1, 2, 3, 4, 5];
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    setCurrent((s) => (s < 4 ? s + 1 : 0));
  };

  const style = {
    transform: `translateX(-${current * 320}px)`,
  };

  return (
    <Modal open={show} className="relative w-80 overflow-hidden" onClose={onClose}>
      <div className="flex h-[600px] w-[1600px] duration-200 " style={style}>
        {stories.map((story) => (
          <div
            key={story}
            className="h-[600px] w-80 cursor-pointer border bg-white text-black"
            onClick={handleClick}
          >
            {story}
          </div>
        ))}
      </div>
    </Modal>
  );
}
