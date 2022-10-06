import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head></Head>
      <body className="bg-gray-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
