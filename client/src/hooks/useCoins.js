import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

async function fetchCoins(page) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/coins/markets?page=${page}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function useCoins(page = 1) {
  return useQuery(['coins', page], () => fetchCoins(page), {
    keepPreviousData: true,
  });
}

export default useCoins;
