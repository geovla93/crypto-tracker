import cn from 'classnames';

function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        'w-28 rounded-md bg-gray-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
