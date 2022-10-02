function Footer() {
  return (
    <footer className="h-16">
      <div className="container mx-auto flex h-full flex-col items-center justify-center">
        <p className="font-bold tracking-wide">
          Data provided by{' '}
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://www.coingecko.com/en/api"
            target="_blank"
            rel="noreferrer"
          >
            CoinGecko
          </a>
        </p>
        <p className="">&copy; All rights reserved. George Vlassis</p>
      </div>
    </footer>
  );
}

export default Footer;
