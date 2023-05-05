interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="relative h-[224px] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md dark:bg-slate-700">
      {children}
    </div>
  );
}
