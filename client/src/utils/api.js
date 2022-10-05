import axios from 'axios';

export async function fetchCoins(page) {
  const queryString = new URLSearchParams({
    page,
  });

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/coins/markets?${queryString}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchCoinDetails(coinId) {
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
