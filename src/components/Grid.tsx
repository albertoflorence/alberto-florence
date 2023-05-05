import clsx from 'clsx';
import Card from './Card';

interface GridProps {
  items: React.ReactNode[];
  cols?: string;
  className?: string;
}

const gridCols: { [col: string]: string } = {
  2: 'md:grid-cols-[repeat(2,_360px)]',
  3: 'md:grid-cols-[repeat(3,_230px)]',
};

export default function Grid({ items, cols = '2', className }: GridProps) {
  return (
    <div
      className={clsx(
        'grid w-full grid-cols-[minmax(360px,1fr)] justify-center gap-8 p-1',
        gridCols[cols],
        className,
      )}
    >
      {items.map((item, index) => (
        <Card key={index}>{item}</Card>
      ))}
    </div>
  );
}
