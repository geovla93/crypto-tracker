import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

import Table from '../Table';
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

  return (
    <Table.Row className="group border border-gray-700 transition-colors even:bg-gray-800 hover:bg-slate-800/80">
      <Table.Header scope="row" className="text-left">
        {rank}
      </Table.Header>
      <Table.Cell className="text-left">
        <div className="flex flex-col items-start">
          <Link href={`/${coin.id}`} className="animate-underline font-bold">
            {name}
          </Link>
          <span className="uppercase text-gray-400">{symbol}</span>
        </div>
      </Table.Cell>

      <Table.Cell>
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
      </Table.Cell>
      <Table.Cell>
        ${numberWithCommas(parseFloat(currentPrice).toFixed(2))}
      </Table.Cell>
      <Table.Cell>
        ${numberWithCommas(parseFloat(high24h).toFixed(2))}
      </Table.Cell>
      <Table.Cell>
        ${numberWithCommas(parseFloat(low24h).toFixed(2))}
      </Table.Cell>
    </Table.Row>
  );
}

export default CoinDetails;
