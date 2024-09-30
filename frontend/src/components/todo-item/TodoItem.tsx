import { useState } from "react";
import cn from "../../utils/classnames";

type TodoItemProps = {
  description: string;
};

export default function TodoItem({ description }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="w-full h-10 flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer select-none hover:bg-blue-50">
      <div className="relative flex">
        <input
          type="checkbox"
          className="          
          appearance-none w-4 h-4 rounded border-2 border-slate-500
          focus-visible:ring-1 focus-visible:ring-blue-500
          checked:border-blue-500 checked:bg-blue-500
          peer
        "
          onChange={e => setIsChecked(e.target.checked)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            absolute w-3 h-3 hidden peer-checked:block
            top-1/2 -translate-y-1/2
            left-1/2 -translate-x-1/2
          "
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span
        className={cn("relative", {
          "line-through": isChecked
        })}
      >
        {description}
      </span>
    </label>
  );
}
