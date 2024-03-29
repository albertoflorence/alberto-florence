import IconBase, { IconBaseProps } from './IconBase';

export default function LeftArrow({ size, className }: IconBaseProps) {
  return (
    <IconBase className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="voltar"
      >
        <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"></path>
      </svg>
    </IconBase>
  );
}
