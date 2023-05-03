import Image from 'next/image';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="relative h-[224px] cursor-pointer overflow-hidden rounded-2xl bg-slate-200 duration-150 hover:scale-105">
      <Image src={`/images/Group ${children}.jpg`} alt="img" fill />
    </div>
  );
}
