import clsx from 'clsx';
import Card from './Card';

interface GridProps {
  items: React.ReactNode[];
  cols?: string;
  className?: string;
}

const gridCols: { [col: string]: string } = {
  2: 'md:grid-cols-[repeat(2,_1fr)] grid-cols-[minmax(0,_360px)]',
  3: 'md:grid-cols-[repeat(3,_1fr)] sm:grid-cols-[repeat(2,_240px)] grid-cols-[repeat(1,_240px)]',
};

export default function Grid({ items, cols = '2', className }: GridProps) {
  return (
    <div className={clsx('grid w-full justify-center gap-8 p-1', gridCols[cols], className)}>
      {items.map((item, index) => (
        <Card key={index}>{item}</Card>
      ))}
    </div>
  );
}
