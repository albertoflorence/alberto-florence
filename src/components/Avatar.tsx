import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="h-52 w-52 shrink-0">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-[3px] border-orange bg-white">
        <Image
          src="/images/avatar.jpg"
          width={192}
          height={192}
          priority
          alt="Um retrato de um homem"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
