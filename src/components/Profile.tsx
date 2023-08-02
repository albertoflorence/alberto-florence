const texts = [
  'Atualmente estudando programação',
  'Animado para colaborar com outras pessoas',
  'Empenhado com a melhoria contínua.',
];

export default function Profile() {
  return (
    <section className="my-16 grid w-full grid-cols-3 ">
      {texts.map((text) => (
        <div
          key={text}
          className="items-center text-center text-2xl text-gray-200 dark:text-gray-100 max-[300px]:text-xl"
        >
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
}
