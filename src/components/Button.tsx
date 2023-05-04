import clsx from 'clsx';

export function Button({ children, className, ...props }: React.ComponentPropsWithRef<'button'>) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'hover: w-full rounded-md border-none px-16 py-5 shadow-md duration-100 hover:scale-105 hover:brightness-75 hover:dark:brightness-125',
      )}
    >
      {children}
    </button>
  );
}
