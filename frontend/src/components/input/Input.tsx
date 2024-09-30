import { forwardRef } from "react";
import cn from "../../utils/classnames";

const Input = forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<"input">
>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(`
        box-border
        h-11 p-2 pl-8 border-2 rounded-md 
        focus:outline-2 focus:outline-blue-500 focus:outline-offset-4
        focus:text-slate-500 focus:placeholder:text-slate-500 focus:border-slate-500
        peer ${props.className}
      `)}
    />
  );
});

export default Input;
