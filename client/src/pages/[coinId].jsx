import { useRouter } from 'next/router';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import cn from 'classnames';

import Layout from '../components/Layout';
import PricePercentageDetails from '../components/PricePercentageDetails';
import PriceRange from '../components/PriceRange';
import Spinner from '../components/Spinner';
import useCoin from '../hooks/useCoin';
import { numberWithCommas } from '../utils/transformations';

function CoinDetailsPage() {
  const router = useRouter();
  const { coinId } = router.query;
  const { data: coin, isLoading, error } = useCoin(coinId);

  if (isLoading) {
    return (
      <Layout>
        <div className="mx-auto flex w-full max-w-2xl justify-center px-4">
          <Spinner />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="mx-auto w-full max-w-2xl px-4">
          Error: {error.message}
        </div>
      </Layout>
    );
  }

  const {
    name,
    description,
    currentPrice,
    high24h,
    low24h,
    priceChangePercentage24h,
    priceChangePercentage7d,
    priceChangePercentage14d,
    priceChangePercentage30d,
    priceChangePercentage60d,
    priceChangePercentage200d,
    priceChangePercentage1y,
  } = coin;
  const isPriceDown = parseFloat(priceChangePercentage24h) < 0;

  return (
    <Layout title="Coin Details">
      <div className="mx-auto w-full max-w-2xl px-4">
        <h1 className="mb-3 text-2xl font-bold text-gray-200">{name}</h1>
        <div className="flex items-center space-x-2">
          <h2 className="text-4xl font-bold">
            ${numberWithCommas(parseFloat(currentPrice).toFixed(2))}
          </h2>
          <div
            className={cn(
              'inline-flex w-full max-w-[80px] items-center justify-center space-x-1 rounded p-2',
              {
                'bg-green-900 text-emerald-400': !isPriceDown,
                'bg-red-900 text-rose-400': isPriceDown,
              },
            )}
          >
            {!isPriceDown ? (
              <ChevronUpIcon className="h-4 w-4 text-emerald-400" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 text-rose-400" />
            )}
            <span className="cursor-default font-semibold">
              {Math.abs(parseFloat(priceChangePercentage24h)).toFixed(2)}%
            </span>
          </div>
        </div>
        <PriceRange min={low24h} max={high24h} />
        <PricePercentageDetails
          priceChangePercentage24h={priceChangePercentage24h}
          priceChangePercentage7d={priceChangePercentage7d}
          priceChangePercentage14d={priceChangePercentage14d}
          priceChangePercentage30d={priceChangePercentage30d}
          priceChangePercentage60d={priceChangePercentage60d}
          priceChangePercentage200d={priceChangePercentage200d}
          priceChangePercentage1y={priceChangePercentage1y}
        />
        <p
          className="prose prose-invert"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </Layout>
  );
}

export default CoinDetailsPage;
