import IconBase, { IconBaseProps } from './IconBase';

export default function Play({ size, className }: IconBaseProps) {
  return (
    <IconBase className={className}>
      <svg
        width={size}
        height={size}
        viewBox="-1 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="play"
      >
        <path fill="#3D3D3D" d="M7 6v12l10-6z"></path>
      </svg>
    </IconBase>
  );
}
