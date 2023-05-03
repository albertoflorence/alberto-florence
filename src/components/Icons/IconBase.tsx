import { clsx } from 'clsx';

export interface IconBaseProps {
  children?: React.ReactNode;
  className?: string;
  size?: number;
}

export default function IconBase({ children, className }: IconBaseProps) {
  return <span className={clsx(className, 'rounded-full')}>{children}</span>;
}
