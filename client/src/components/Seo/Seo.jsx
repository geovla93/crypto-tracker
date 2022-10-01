import Head from 'next/head';

function Seo({ title, description }) {
  const siteTitle = `${title} | CryptoTracker`;
  const siteDescription =
    description ||
    'CryptoTracker is a simple app to track the latest crypto prices.';

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
    </Head>
  );
}

export default Seo;
