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
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('');
  const [sortDirection, setSortDirection] = useState(SortDirection.ASC);
  const [sortedCoins, setSortedCoins] = useState([]);
  const { data, error, isLoading, isPreviousData } = useCoins(page);

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
    if (data) {
      setSortedCoins(data.coins);
    }
  }, [data]);

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
    <>
      <div className="relative overflow-x-auto">
        <table className="mx-auto w-full max-w-4xl table-auto border-collapse border border-gray-800 text-right text-sm">
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
              <CoinDetails key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 flex items-center justify-center space-x-3">
        <button
          className="w-28 rounded-md bg-gray-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => setPage((prevValue) => Math.max(prevValue - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <p className="rounded-md bg-gray-700 px-4 py-2 text-white">{page}</p>
        <button
          className="w-28 rounded-md bg-gray-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => {
            if (!isPreviousData && data.hasMore) {
              setPage((prevValue) => prevValue + 1);
            }
          }}
          disabled={isPreviousData || !data?.hasMore}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default CoinsList;
