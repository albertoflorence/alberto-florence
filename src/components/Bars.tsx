import clsx from 'clsx';

interface BarsProps {
  quantity: number;
  current: number;
}

export default function Bars({ quantity, current }: BarsProps) {
  const elements = Array.from({ length: quantity }, (_, index) => (
    <div
      key={index}
      className={clsx(
        current === index ? 'opacity-100' : 'opacity-50',
        'h-[2px] flex-1 rounded-lg bg-white transition-opacity',
      )}
    />
  ));
  return (
    <div className="absolute top-0 flex w-full justify-evenly gap-0.5 p-4 lg:p-3">{elements}</div>
  );
}
