import { QueryClient, dehydrate } from '@tanstack/react-query';

import CoinsList from '../components/CoinsList';
import Layout from '../components/Layout';
import { fetchCoins } from '../utils/api';

function HomePage() {
  return (
    <Layout title="List of Coins">
      <div className="container mx-auto px-4">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Cryptocurrency Tracker App
          </h1>
          <h3 className="text-xl text-gray-300">
            View the latest prices and relevant information of all crypto coins.
          </h3>
        </div>

        <CoinsList />
      </div>
    </Layout>
  );
}

export default HomePage;

export async function getServerSideProps(ctx) {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['coins', 'list', 1], () => fetchCoins(1));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
