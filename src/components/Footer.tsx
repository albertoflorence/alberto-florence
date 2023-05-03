export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mb-14 mt-28 flex items-center justify-center text-gray-100">
      {`© Alberto Sabatier Florence. ${year} All rights reserved`}
    </footer>
  );
}
