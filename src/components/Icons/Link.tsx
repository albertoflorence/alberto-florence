import IconBase, { IconBaseProps } from './IconBase';

export default function Link({ size, className }: IconBaseProps) {
  return (
    <IconBase className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66663 9.99998C6.66663 10.221 6.75442 10.433 6.9107 10.5892C7.06698 10.7455 7.27895 10.8333 7.49996 10.8333H12.5C12.721 10.8333 12.9329 10.7455 13.0892 10.5892C13.2455 10.433 13.3333 10.221 13.3333 9.99998C13.3333 9.77897 13.2455 9.567 13.0892 9.41072C12.9329 9.25444 12.721 9.16665 12.5 9.16665H7.49996C7.27895 9.16665 7.06698 9.25444 6.9107 9.41072C6.75442 9.567 6.66663 9.77897 6.66663 9.99998ZM8.33329 12.5H5.83329C5.17025 12.5 4.53437 12.2366 4.06553 11.7677C3.59668 11.2989 3.33329 10.663 3.33329 9.99998C3.33329 9.33694 3.59668 8.70105 4.06553 8.23221C4.53437 7.76337 5.17025 7.49998 5.83329 7.49998H8.33329C8.55431 7.49998 8.76627 7.41218 8.92255 7.2559C9.07883 7.09962 9.16663 6.88766 9.16663 6.66665C9.16663 6.44563 9.07883 6.23367 8.92255 6.07739C8.76627 5.92111 8.55431 5.83331 8.33329 5.83331H5.83329C4.72822 5.83331 3.66842 6.2723 2.88701 7.0537C2.10561 7.8351 1.66663 8.89491 1.66663 9.99998C1.66663 11.105 2.10561 12.1649 2.88701 12.9463C3.66842 13.7277 4.72822 14.1666 5.83329 14.1666H8.33329C8.55431 14.1666 8.76627 14.0788 8.92255 13.9226C9.07883 13.7663 9.16663 13.5543 9.16663 13.3333C9.16663 13.1123 9.07883 12.9003 8.92255 12.7441C8.76627 12.5878 8.55431 12.5 8.33329 12.5ZM14.1666 5.83331H11.6666C11.4456 5.83331 11.2337 5.92111 11.0774 6.07739C10.9211 6.23367 10.8333 6.44563 10.8333 6.66665C10.8333 6.88766 10.9211 7.09962 11.0774 7.2559C11.2337 7.41218 11.4456 7.49998 11.6666 7.49998H14.1666C14.8297 7.49998 15.4656 7.76337 15.9344 8.23221C16.4032 8.70105 16.6666 9.33694 16.6666 9.99998C16.6666 10.663 16.4032 11.2989 15.9344 11.7677C15.4656 12.2366 14.8297 12.5 14.1666 12.5H11.6666C11.4456 12.5 11.2337 12.5878 11.0774 12.7441C10.9211 12.9003 10.8333 13.1123 10.8333 13.3333C10.8333 13.5543 10.9211 13.7663 11.0774 13.9226C11.2337 14.0788 11.4456 14.1666 11.6666 14.1666H14.1666C15.2717 14.1666 16.3315 13.7277 17.1129 12.9463C17.8943 12.1649 18.3333 11.105 18.3333 9.99998C18.3333 8.89491 17.8943 7.8351 17.1129 7.0537C16.3315 6.2723 15.2717 5.83331 14.1666 5.83331V5.83331Z"
          fill="#3D3D3D"
        />
      </svg>
    </IconBase>
  );
}