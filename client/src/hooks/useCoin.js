import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

async function fetchCoinDetails(coinId) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/coins/${coinId}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function useCoins(coinId) {
  return useQuery(['coins', coinId], () => fetchCoinDetails(coinId), {
    enabled: !!coinId,
  });
}

export default useCoins;
