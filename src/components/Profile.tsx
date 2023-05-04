interface ProfileProps {
  first: string;
  second: string;
}

export default function Profile({ first, second }: ProfileProps) {
  return (
    <div className="items-center text-center text-2xl text-gray-200 dark:text-gray-100">
      <p>{first}</p>
      <p>{second}</p>
    </div>
  );
}
