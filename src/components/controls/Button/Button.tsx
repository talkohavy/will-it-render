import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  className?: string;
  inert?: boolean;
}> & { [key: string]: any };
// & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const { children, onClick, className, inert, ...rest } = props;

  return (
    <button
      type='button'
      onClick={onClick}
      className={twMerge(
        'rounded-md hover:rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-500 focus:rounded-2xl p-3',
        className,
      )}
      // @ts-ignore
      inert={inert ? 'true' : undefined}
      {...rest}
    >
      {children}
    </button>
  );
}
