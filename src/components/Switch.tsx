import clsx from 'clsx';

interface SwitchProps {
  on: boolean;
  onChange: () => void;
}

const itens = ['Portfolio', 'Skills'];

export default function Switch({ on, onChange }: SwitchProps) {
  return (
    <div className="my-16 w-full">
      <label className="flex h-28 w-full cursor-pointer gap-5 rounded-[20px] bg-bgDarkLight px-5 py-4">
        <input type="checkbox" onChange={onChange} className="hidden" />
        {itens.map((item, i) => (
          <div
            key={item}
            className={clsx(
              on && i == 0 && 'bg-bgDark',
              !on && i == 1 && 'bg-bgDark',
              'flex h-full w-full select-none items-center justify-center rounded-[10px] text-gray-100 duration-200',
            )}
          >
            {item}
          </div>
        ))}
      </label>
    </div>
  );
}
