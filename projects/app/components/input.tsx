import React, {
  useEffect, forwardRef, useRef, useImperativeHandle,
} from 'react';
import cls from 'classnames';

export type InputProps = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> & {
  className?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const {
    className,
    error,
    ...inputProps
  } = props;

  const innerRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => innerRef.current!);

  useEffect(() => {
    innerRef.current?.setCustomValidity(error ?? '');
  }, [ref, error]);

  return <input ref={innerRef} {...inputProps} className={cls('h-8 px-3 font-light border border-slate-300 invalid:border-red-500 invalid:placeholder:text-red-400 rounded-md placeholder:text-slate-400 placeholder:font-light hover:border-slate-400 hover:placeholder:text-slate-500 focus:focus:outline-blue-400 focus:placeholder:text-slate-500', className)} />;
});

Input.defaultProps = {
  className: undefined,
  error: undefined,
};
