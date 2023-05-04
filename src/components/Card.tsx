import Image from 'next/image';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="relative h-[224px] cursor-pointer overflow-hidden rounded-2xl shadow-md">
      <Image
        src={`/images/Group ${children}.jpg`}
        alt="img"
        fill
        className="duration-150 hover:scale-110 "
      />
    </div>
  );
}
