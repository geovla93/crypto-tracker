import { useEffect, useState } from 'react';

import CoinDetails from '../CoinDetails';
import ArrowUpAndDownIcon from '../ArrowUpAndDownIcon';
import Spinner from '../Spinner';
import useCoins from '../../hooks/useCoins';

const SortDirection = Object.freeze({
  ASC: 'asc',
  DESC: 'desc',
});

const SortBy = Object.freeze({
  PRICE: 'currentPrice',
  PRICE_CHANGE: 'priceChangePercentage24h',
  NAME: 'name',
  HIGH: 'high24h',
  LOW: 'low24h',
});

function CoinsList() {
  const [sortBy, setSortBy] = useState('');
  const [sortDirection, setSortDirection] = useState(SortDirection.ASC);
  const [sortedCoins, setSortedCoins] = useState([]);
  const { data: coins, error, isLoading } = useCoins();

  function sortCoins(sortByFilter) {
    if (sortByFilter !== sortBy) {
      setSortBy(sortByFilter);
    }

    setSortDirection((prevValue) =>
      prevValue === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC,
    );

    setSortedCoins((prevValue) => {
      const coins = [...prevValue];
      const isAsc = sortDirection === SortDirection.ASC;

      return coins.sort((a, b) => {
        if (a[sortByFilter] < b[sortByFilter]) {
          return isAsc ? -1 : 1;
        }
        if (a[sortByFilter] > b[sortByFilter]) {
          return isAsc ? 1 : -1;
        }
        return 0;
      });
    });
  }

  useEffect(() => {
    if (coins) {
      setSortedCoins(coins);
    }
  }, [coins]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-gray-800 text-right text-sm">
        <thead className="bg-gray-700">
          <tr>
            <th scope="col" className="whitespace-nowrap py-2 px-4 text-left">
              #
            </th>
            <th scope="col" className="whitespace-nowrap py-2 px-4 text-left">
              <div className="flex items-center">
                Name
                <ArrowUpAndDownIcon
                  className="cursor-pointer"
                  onClick={() => sortCoins(SortBy.NAME)}
                />
              </div>
            </th>
            <th scope="col" className="whitespace-nowrap py-2 px-4">
              <div className="flex items-center justify-end">
                24h (%)
                <ArrowUpAndDownIcon
                  className="cursor-pointer"
                  onClick={() => sortCoins(SortBy.PRICE_CHANGE)}
                />
              </div>
            </th>
            <th scope="col" className="whitespace-nowrap py-2 px-4">
              <div className="flex items-center justify-end">
                Price
                <ArrowUpAndDownIcon
                  className="cursor-pointer"
                  onClick={() => sortCoins(SortBy.PRICE)}
                />
              </div>
            </th>
            <th scope="col" className="whitespace-nowrap py-2 px-4">
              <div className="flex items-center justify-end">
                24h (High)
                <ArrowUpAndDownIcon
                  className="cursor-pointer"
                  onClick={() => sortCoins(SortBy.HIGH)}
                />
              </div>
            </th>
            <th scope="col" className="whitespace-nowrap py-2 px-4">
              <div className="flex items-center justify-end">
                24h (Low)
                <ArrowUpAndDownIcon
                  className="cursor-pointer"
                  onClick={() => sortCoins(SortBy.LOW)}
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCoins.map((coin, index) => (
            <CoinDetails key={coin.id} coin={{ ...coin, rank: index + 1 }} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinsList;
