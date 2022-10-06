import cn from 'classnames';

function Table({ children, className, ...props }) {
  return (
    <table
      className={cn(
        (className =
          'mx-auto w-full max-w-4xl table-auto border-collapse border border-gray-800 text-right text-sm'),
        className,
      )}
      {...props}
    >
      {children}
    </table>
  );
}

Table.Head = function TableHead({ children, className, ...props }) {
  return (
    <thead className={cn('bg-gray-700', className)} {...props}>
      {children}
    </thead>
  );
};

Table.Body = function TableBody({ children, className, ...props }) {
  return (
    <tbody className={cn('', className)} {...props}>
      {children}
    </tbody>
  );
};

Table.Row = function TableRow({ children, className, ...props }) {
  return (
    <tr className={cn('', className)} {...props}>
      {children}
    </tr>
  );
};

Table.Header = function TableHeader({ children, className, ...props }) {
  return (
    <th className={cn('whitespace-nowrap py-2 px-4', className)} {...props}>
      {children}
    </th>
  );
};

Table.Cell = function TableCell({ children, className, ...props }) {
  return (
    <td className={cn('whitespace-nowrap py-2 px-4', className)} {...props}>
      {children}
    </td>
  );
};

export default Table;
