import clsx from 'clsx';
import { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';
import Bars from './Bars';

interface StoriesProps {
  open: boolean;
  onClose: () => void;
}

export default function Stories({ open, onClose }: StoriesProps) {
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    setCurrent((s) => (s < 4 ? s + 1 : 0));
  };

  const style = {
    transform: `translateX(-${current * 320}px)`,
  };

  return (
    <Modal open={open} className="relative w-80 overflow-hidden rounded-xl" onClose={onClose}>
      <div className="flex h-[600px] w-[1600px] transition-transform" style={style}>
        {stories.map(({ subtitle, image }) => (
          <div
            key={subtitle}
            className="relative flex h-[600px] w-80 cursor-pointer justify-center overflow-hidden"
            onClick={handleClick}
          >
            <Image
              width={320}
              height={600}
              src={image}
              alt={subtitle}
              className="h-full object-cover"
            />
            <p className="absolute bottom-12 px-1 text-center text-xl text-white shadow-black text-shadow">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
      <Bars quantity={stories.length} current={current} />
    </Modal>
  );
}

const stories = [
  {
    image: '/images/luna.jpg',
    subtitle: 'testando um texto',
  },
  {
    image: '/images/luna.jpg',
    subtitle: 'testando um texto um pouquinho maior',
  },
  {
    image: '/images/luna.jpg',
    subtitle: 'testando um texto relativamente maior, mas nem tanto',
  },
  {
    image: '/images/luna.jpg',
    subtitle: 'testando um texto que deveria ser maior, mas ainda sim não é o maior de todos',
  },
  {
    image: '/images/luna.jpg',
    subtitle:
      'testando um texto grande, o maior de todos, nenhum se compara a ele, nem mesmo ele mesmo !!',
  },
];
