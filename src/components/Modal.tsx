import clsx from 'clsx';
import { useRef, useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

export default function Modal({
  open,
  children,
  className,
  fullScreen,
  onClose,
  onClick,
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    const { current: modal } = modalRef;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      onClose={onClose}
      onClick={({ target }) => onClose && target === modalRef.current && onClose()}
      className={clsx(
        'overflow-visible p-0 outline-none backdrop:bg-black/50 dark:text-gray-50',
        fullScreen ? 'bg-transparent max-lg:m-0' : 'rounded-xl dark:bg-slate-800',
      )}
    >
      <div className={className} onClick={onClick}>
        {children}
      </div>
    </dialog>
  );
}
