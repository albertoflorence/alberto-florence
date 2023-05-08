const texts = [
  'Currently studying programming',
  'Excited to collaborate with others',
  'Committed to continuous improvement',
];

export default function Profile() {
  return (
    <section className="my-16 grid w-full grid-cols-3 ">
      {texts.map((text) => (
        <div
          key={text}
          className="items-center text-center text-2xl text-gray-200 dark:text-gray-100"
        >
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
}
