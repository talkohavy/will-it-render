import { twMerge } from 'tailwind-merge';

type InputProps = {
  value: string;
  setValue: (value: any) => void;
  type?: 'text';
  placeholder?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  className?: string;
};

export default function Input(props: InputProps) {
  const { value, setValue, type = 'text', placeholder = '', disabled, className } = props;

  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={twMerge('h-10 w-72 rounded-md border border-black p-2', className)}
    />
  );
}
