import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

async function fetchCoins() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/coins/markets`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function useCoins() {
  return useQuery(['coins'], fetchCoins);
}

export default useCoins;
