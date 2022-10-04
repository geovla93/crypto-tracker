import axios from 'axios';

export async function getAllCoins(req, res) {
  try {
    const { page } = req.query;
    // Current page is 1 by default if not provided
    const currentPage = typeof page === 'string' ? parseInt(page, 10) : 1;
    // Maxiumum 50 coins per page
    const perPage = 50;
    // hasMore is true by default, if there are less than 50 coins, it will be false
    let hasMore = true;

    // First request to get the coins
    const response = await axios.get(
      `${process.env.COIN_GECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${currentPage}&sparkline=false`,
    );
    // Map the response to get only the necessary data
    const coins = response.data.map((coin, index) => ({
      id: coin.id,
      rank: index + 1 + (currentPage - 1) * perPage, // rank is calculated based on the page number and the index of the coin in the page. Not asked in the task but I thought it would be nice to have, so I added it. You can see it in the UI.
      name: coin.name,
      symbol: coin.symbol,
      currentPrice: coin.current_price,
      high24h: coin.high_24h,
      low24h: coin.low_24h,
      priceChangePercentage24h: coin.price_change_percentage_24h,
    }));

    // If there are less than 50 coins, hasMore will be false
    if (coins.length < 50) {
      hasMore = false;
      // If there are 50 coins, we need to make another request to check if there are more coins
    } else {
      const hasMoreResponse = await axios.get(
        `${
          process.env.COIN_GECKO_API_URL
        }/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${
          currentPage + 1
        }&sparkline=false`,
      );
      // If there are no coins in the next page, hasMore will be false
      if (hasMoreResponse.data.length === 0) {
        hasMore = false;
      }
    }

    res.status(200).json({ coins, hasMore });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getCoinById(req, res) {
  try {
    const { id } = req.params;
    // Check if the id is valid
    if (typeof id !== 'string' || id.length === 0) {
      res.status(400).json({ message: 'Invalid id' });
      return;
    }

    // Request to get the coin
    const response = await axios.get(
      `${process.env.COIN_GECKO_API_URL}/coins/${id}`,
    );
    // Get the necessary data from the response
    const coin = {
      id: response.data.id,
      name: response.data.name,
      description: response.data.description.en,
      currentPrice: response.data.market_data.current_price.usd,
      high24h: response.data.market_data.high_24h.usd,
      low24h: response.data.market_data.low_24h.usd,
      priceChangePercentage24h:
        response.data.market_data.price_change_percentage_24h,
      priceChangePercentage7d:
        response.data.market_data.price_change_percentage_7d,
      priceChangePercentage14d:
        response.data.market_data.price_change_percentage_14d,
      priceChangePercentage30d:
        response.data.market_data.price_change_percentage_30d,
      priceChangePercentage60d:
        response.data.market_data.price_change_percentage_60d,
      priceChangePercentage200d:
        response.data.market_data.price_change_percentage_200d,
      priceChangePercentage1y:
        response.data.market_data.price_change_percentage_1y,
    };

    res.status(200).json(coin);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
