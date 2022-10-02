import axios from 'axios';

describe('getAllCoins', () => {
  it('should return an object with a coins property and a hasMore property', async () => {
    const response = await axios.get(
      'http://localhost:8080/coins/markets?page=1',
    );
    expect(response.data).toHaveProperty('coins');
    expect(response.data).toHaveProperty('hasMore');
  });

  it('should return an object with a coins property that is an array', async () => {
    const response = await axios.get(
      'http://localhost:8080/coins/markets?page=1',
    );
    expect(Array.isArray(response.data.coins)).toBe(true);
  });

  it('should return an object with a hasMore property that is a boolean', async () => {
    const response = await axios.get(
      'http://localhost:8080/coins/markets?page=1',
    );
    expect(typeof response.data.hasMore).toBe('boolean');
  });

  it('should return an object with a coins property that is an array of length 50 or less', async () => {
    const response = await axios.get(
      'http://localhost:8080/coins/markets?page=1',
    );
    expect(response.data.coins.length).toBeLessThanOrEqual(50);
  });
});

describe('getCoin', () => {
  it('should return an object', async () => {
    const response = await axios.get('http://localhost:8080/coins/bitcoin');
    expect(typeof response.data).toBe('object');
  });

  it('should return an object with the correct id', async () => {
    const response = await axios.get('http://localhost:8080/coins/bitcoin');
    expect(response.data.id).toBe('bitcoin');
  });
});
