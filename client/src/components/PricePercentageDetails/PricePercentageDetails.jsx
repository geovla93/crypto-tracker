import cn from 'classnames';

function PricePercentageDetails({
  priceChangePercentage24h,
  priceChangePercentage7d,
  priceChangePercentage14d,
  priceChangePercentage30d,
  priceChangePercentage60d,
  priceChangePercentage200d,
  priceChangePercentage1y,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="mx-auto mb-6 w-full max-w-2xl table-auto border-collapse border border-gray-800 text-center">
        <thead>
          <tr className="bg-gray-500">
            <th className="border border-gray-700 px-4 py-2">24H</th>
            <th className="border border-gray-700 px-4 py-2">7D</th>
            <th className="border border-gray-700 px-4 py-2">14D</th>
            <th className="border border-gray-700 px-4 py-2">30D</th>
            <th className="border border-gray-700 px-4 py-2">60D</th>
            <th className="border border-gray-700 px-4 py-2">200D</th>
            <th className="border border-gray-700 px-4 py-2">1Y</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className={cn('border border-gray-700 px-3 py-2 text-sm', {
                'text-green-500': parseFloat(priceChangePercentage24h) > 0,
                'text-red-500': parseFloat(priceChangePercentage24h) < 0,
              })}
            >
              {parseFloat(priceChangePercentage24h).toFixed(2)}%
            </td>
            <td
              className={cn('border border-gray-700 px-3 py-2 text-sm', {
                'text-green-500': parseFloat(priceChangePercentage7d) > 0,
                'text-red-500': parseFloat(priceChangePercentage7d) < 0,
              })}
            >
              {parseFloat(priceChangePercentage7d).toFixed(2)}%
            </td>
            <td
              className={cn('border border-gray-700 px-3 py-2 text-sm', {
                'text-green-500': parseFloat(priceChangePercentage14d) > 0,
                'text-red-500': parseFloat(priceChangePercentage14d) < 0,
              })}
            >
              {parseFloat(priceChangePercentage14d).toFixed(2)}%
            </td>
            <td
              className={cn('border border-gray-700 px-3 py-2 text-sm', {
                'text-green-500': parseFloat(priceChangePercentage30d) > 0,
                'text-red-500': parseFloat(priceChangePercentage30d) < 0,
              })}
            >
              {parseFloat(priceChangePercentage30d).toFixed(2)}%
            </td>
            <td
              className={cn('border border-gray-700 px-3 py-2 text-sm', {
                'text-green-500': parseFloat(priceChangePercentage60d) > 0,
                'text-red-500': parseFloat(priceChangePercentage60d) < 0,
              })}
            >
              {parseFloat(priceChangePercentage60d).toFixed(2)}%
            </td>
            <td
              className={cn('border border-gray-700 px-3 py-2 text-sm', {
                'text-green-500': parseFloat(priceChangePercentage200d) > 0,
                'text-red-500': parseFloat(priceChangePercentage200d) < 0,
              })}
            >
              {parseFloat(priceChangePercentage200d).toFixed(2)}%
            </td>
            <td
              className={cn('border border-gray-700 px-3 py-2 text-sm', {
                'text-green-500': parseFloat(priceChangePercentage1y) > 0,
                'text-red-500': parseFloat(priceChangePercentage1y) < 0,
              })}
            >
              {parseFloat(priceChangePercentage1y).toFixed(2)}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PricePercentageDetails;
