import { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/coins/markets`)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-red-500">Cryptocurrency Tracker</h1>
      <div>
        {coins.map((coin) => (
          <div key={coin.id}>
            <h1>{coin.name}</h1>
            <p>{coin.currentPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
