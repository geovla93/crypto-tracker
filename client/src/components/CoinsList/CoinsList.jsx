import { useEffect, useState } from 'react';

import CoinDetails from '../CoinDetails';
import useCoins from '../../hooks/useCoins';
import ArrowUpAndDownIcon from '../ArrowUpAndDownIcon';

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
  RANK: 'rank',
});

function CoinsList() {
  const [sortBy, setSortBy] = useState(SortBy.RANK);
  const [sortDirection, setSortDirection] = useState(SortDirection.ASC);
  const [sortedCoins, setSortedCoins] = useState([]);
  const { data: coins, error, isLoading } = useCoins();

  function sortCoins(sortBy) {
    setSortBy(sortBy);
    setSortDirection((prevValue) =>
      prevValue === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC,
    );

    setSortedCoins((prevValue) => {
      const coins = [...prevValue];
      const isAsc = sortDirection === SortDirection.ASC;

      return coins.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return isAsc ? -1 : 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return isAsc ? 1 : -1;
        }
        return 0;
      });
    });
  }

  useEffect(() => {
    if (coins) {
      setSortedCoins(
        coins.map((coin, index) => ({ ...coin, rank: index + 1 })),
      );
    }
  }, [coins]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full table-auto text-right text-sm">
        <thead className="bg-gray-300">
          <tr>
            <th scope="col" className="whitespace-nowrap py-2 px-4 text-left">
              <div className="flex items-center">
                #
                <ArrowUpAndDownIcon
                  className="cursor-pointer"
                  onClick={() => sortCoins(SortBy.RANK)}
                />
              </div>
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
              <div className="flex items-center">
                24h (%)
                <ArrowUpAndDownIcon
                  className="cursor-pointer"
                  onClick={() => sortCoins(SortBy.PRICE_CHANGE)}
                />
              </div>
            </th>
            <th scope="col" className="whitespace-nowrap py-2 px-4">
              <div className="flex items-center">
                Price
                <ArrowUpAndDownIcon
                  className="cursor-pointer"
                  onClick={() => sortCoins(SortBy.PRICE)}
                />
              </div>
            </th>
            <th scope="col" className="whitespace-nowrap py-2 px-4">
              <div className="flex items-center">
                24h (High)
                <ArrowUpAndDownIcon
                  className="cursor-pointer"
                  onClick={() => sortCoins(SortBy.HIGH)}
                />
              </div>
            </th>
            <th scope="col" className="whitespace-nowrap py-2 px-4">
              <div className="flex items-center">
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
            <CoinDetails key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinsList;
