import Link from 'next/link';

function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 h-12 bg-gray-700 shadow">
      <nav className="container mx-auto flex h-full items-center px-4">
        <Link href="/" className="text-2xl font-bold">
          CryptoTracker
        </Link>
      </nav>
    </header>
  );
}

export default Header;
