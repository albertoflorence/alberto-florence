import { useRef, useState } from 'react';
import Image from 'next/image';

import Modal from './Modal';
import Bars from './Bars';

interface StoriesProps {
  open: boolean;
  onClose: () => void;
}

export default function Stories({ open, onClose }: StoriesProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setCurrent((s) => (s < 4 ? s + 1 : 0));
  };

  const style = {
    transform: `translateX(-${current * (ref.current?.offsetWidth || 0)}px)`,
  };

  return (
    <Modal
      open={open}
      className="relative w-screen lg:h-[600px] lg:w-[420px] lg:overflow-hidden lg:rounded-xl"
      onClose={onClose}
      onClick={handleClick}
      fullScreen
    >
      <div className="flex h-screen w-fit transition-transform lg:h-[600px]" style={style}>
        {stories.map(({ subtitle, image }) => (
          <div
            key={subtitle}
            ref={ref}
            className="relative h-screen w-screen cursor-pointer lg:h-[600px] lg:w-[420px]"
          >
            <Image fill src={image} alt={subtitle} className="h-full object-cover" />
            <p className="absolute bottom-12 w-full px-1 text-center text-xl text-white shadow-black text-shadow">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
      <Bars quantity={stories.length} current={current} />
      <button
        className="absolute right-[16px] top-[22px] cursor-pointer text-[24px] font-bold text-white lg:hidden"
        onClick={onClose}
      >
        X
      </button>
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
