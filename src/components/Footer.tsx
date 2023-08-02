export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mb-14 mt-28 flex items-center justify-center text-gray-200 dark:text-gray-100">
      {`© Alberto Sabatier Florence. ${year} Todos os direitos reservados`}
    </footer>
  );
}
