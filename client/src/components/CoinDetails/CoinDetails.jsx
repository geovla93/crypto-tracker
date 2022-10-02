import { useRouter } from 'next/router';
import cn from 'classnames';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

import { numberWithCommas } from '../../utils/transformations';

function CoinDetails({ coin }) {
  const router = useRouter();
  const {
    name,
    symbol,
    currentPrice,
    priceChangePercentage24h,
    high24h,
    low24h,
    rank,
  } = coin;
  const isPriceDown = parseFloat(priceChangePercentage24h) < 0;

  function redirectToCoin() {
    router.push(`/${coin.id}`);
  }

  return (
    <tr
      className="group cursor-pointer border border-gray-700 transition-colors even:bg-gray-800 hover:bg-slate-800/80"
      onClick={redirectToCoin}
    >
      <th scope="row" className="whitespace-nowrap py-2 px-4 text-left">
        {rank}
      </th>
      <td className="whitespace-nowrap py-2 px-4 text-left">
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <span className="uppercase text-gray-400">{symbol}</span>
        </div>
      </td>

      <td className="whitespace-nowrap py-2 px-4">
        <div
          className={cn(
            'inline-flex w-full max-w-[80px] items-center justify-center space-x-1 rounded p-2',
            {
              'bg-green-900 text-emerald-400 group-hover:bg-opacity-90':
                !isPriceDown,
              'bg-red-900 text-rose-400 group-hover:bg-opacity-90': isPriceDown,
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
      </td>
      <td className="whitespace-nowrap py-2 px-4">
        ${numberWithCommas(parseFloat(currentPrice).toFixed(2))}
      </td>
      <td className="whitespace-nowrap py-2 px-4">
        ${numberWithCommas(parseFloat(high24h).toFixed(2))}
      </td>
      <td className="whitespace-nowrap py-2 px-4">
        ${numberWithCommas(parseFloat(low24h).toFixed(2))}
      </td>
    </tr>
  );
}

export default CoinDetails;
