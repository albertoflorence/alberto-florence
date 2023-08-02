import IconBase, { IconBaseProps } from './IconBase';

export default function RightArrow({ size, className }: IconBaseProps) {
  return (
    <IconBase className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="avançar"
      >
        <path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"></path>
      </svg>
    </IconBase>
  );
}
