import { useRef, useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export default function Modal({ open, onClose, children, className }: ModalProps) {
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
      onClick={({ target }) => onClose && target === modalRef.current && onClose()}
      className="overflow-visible rounded-xl p-0 backdrop:bg-black/50 dark:bg-slate-800 dark:text-gray-50"
    >
      <div className={className}>{children}</div>
    </dialog>
  );
}
