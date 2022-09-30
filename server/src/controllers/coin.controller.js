import axios from 'axios';

export async function getAllCoins(req, res) {
  try {
    const response = await axios.get(
      `${process.env.COIN_GECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
    );
    const coins = response.data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      currentPrice: coin.current_price,
      high24h: coin.high_24h,
      low24h: coin.low_24h,
      priceChangePercentage24h: coin.price_change_percentage_24h,
    }));

    res.status(200).json(coins);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getCoinById(req, res) {
  try {
    const { id } = req.params;
    if (typeof id !== 'string' || id.length === 0) {
      res.status(400).json({ message: 'Invalid id' });
      return;
    }

    const response = await axios.get(
      `${process.env.COIN_GECKO_API_URL}/coins/${id}`,
    );
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
