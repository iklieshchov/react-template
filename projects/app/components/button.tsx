import cls from 'classnames';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonProps = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>;

export const BaseButton = (props: ButtonProps) => {
  const { className, ...btnProps } = props;
  return (
    <button
      type="button"
      {...btnProps}
      className={cls(
        'px-3 py-[2px] border-2 rounded-md outline-offset-2',
        className,
      )}
    />
  );
};

export const PrimaryButton = ({ className, ...btnProps }: ButtonProps) => (
  <BaseButton
    {...btnProps}
    className={cls(
      'bg-blue-700 border-blue-700 text-white hover:bg-blue-600 hover:border-blue-600 focus:bg-blue-600 focus:border-blue-600 disabled:bg-blue-300 disabled:border-blue-300 outline-blue-300',
      className,
    )}
  />
);

export const Button = ({ className, ...btnProps }: ButtonProps) => (
  <BaseButton
    {...btnProps}
    className={cls(
      'border-slate-400 text-slate-500 bg-slate-50 hover:bg-slate-100 focus:bg-slate-100 disabled:border-slate-300 disabled:bg-white disabled:text-slate-300 outline-slate-300',
      className,
    )}
  />
);

export const DangerButton = ({ className, ...btnProps }: ButtonProps) => (
  <BaseButton
    {...btnProps}
    className={cls(
      'bg-red-600 border-red-600 text-white hover:bg-red-500 hover:border-red-500 focus:bg-red-600 focus:border-red-600 disabled:bg-red-300 disabled:border-red-300 focus:outline-red-300',
      className,
    )}
  />
);
