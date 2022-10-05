import { useQuery } from '@tanstack/react-query';

import { fetchCoins } from '../utils/api';

function useCoins(page = 1) {
  return useQuery(['coins', 'list', page], () => fetchCoins(page), {
    keepPreviousData: true,
    retry: 1,
  });
}

export default useCoins;
