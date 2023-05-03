import clsx from 'clsx';
import Card from './Card';

interface GridProps {
  items: number[];
  show: boolean;
}

export default function Grid({ items, show }: GridProps) {
  return (
    <div
      className={clsx(
        'grid w-full grid-cols-[minmax(368px,1fr)] justify-center gap-8 px-1 lg:grid-cols-[repeat(2,_368px)]',
        show ? 'animate-swipeStart' : ' invisible absolute animate-swipeEnd',
      )}
    >
      {items.map((item) => (
        <Card key={item}>{item}</Card>
      ))}
    </div>
  );
}
