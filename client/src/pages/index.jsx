import CoinsList from '../components/CoinsList';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <Layout title="List of Coins">
      <div className="container mx-auto px-4">
        <CoinsList />
      </div>
    </Layout>
  );
}

export default HomePage;
