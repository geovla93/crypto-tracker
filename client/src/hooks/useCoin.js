import { useQuery } from '@tanstack/react-query';

import { fetchCoinDetails } from '../utils/api';

function useCoins(coinId) {
  return useQuery(
    ['coins', 'details', coinId],
    () => fetchCoinDetails(coinId),
    {
      enabled: !!coinId,
      retry: 1,
    },
  );
}

export default useCoins;
