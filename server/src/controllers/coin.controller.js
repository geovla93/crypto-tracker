import axios from 'axios';

export async function getAllCoins(req, res, next) {
  res.status(200).json({ message: 'getAllCoins' });
}

export async function getCoinById(req, res, next) {
  res.status(200).json({ message: 'getCoinById' });
}
