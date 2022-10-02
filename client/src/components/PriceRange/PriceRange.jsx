import { numberWithCommas } from '../../utils/transformations';

function PriceRange({ min, max }) {
  return (
    <div className="mx-auto mt-10 mb-6 flex w-full max-w-2xl flex-col">
      <div className="h-2 w-full rounded-full bg-gradient-to-r from-red-500 via-transparent to-green-500" />
      <div className="flex justify-between">
        <small className="text-sm font-bold text-gray-200">
          ${numberWithCommas(parseFloat(min).toFixed(2))}
        </small>
        <small className="text-sm font-bold text-gray-200">24H Range</small>
        <small className="text-sm font-bold text-gray-200">
          ${numberWithCommas(parseFloat(max).toFixed(2))}
        </small>
      </div>
    </div>
  );
}

export default PriceRange;
