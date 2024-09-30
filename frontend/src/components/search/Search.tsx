import { useRef, useState } from "react";
import cn from "../../utils/classnames";
import Input from "../input/Input";

export default function Search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleSearchHandler = () => {
    if (active) return setActive(false);

    setActive(true);
    searchRef.current?.focus();
  };

  const closeSearchHandler = () => {
    setTimeout(() => {
      if (!searchValue && active) setActive(false);
      searchRef.current?.blur();
    }, 150);
  };

  const searchChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div
      className={cn("relative h-11 w-10 transition-all duration-250", {
        "w-full": active
      })}
    >
      <Input
        ref={searchRef}
        type="search"
        placeholder="Search..."
        value={searchValue}
        onBlur={closeSearchHandler}
        onChange={searchChangeValue}
        className={cn("w-0 transition-all duration-250", {
          "pl-10 w-full": active
        })}
      />
      <button
        className="absolute w-11 h-11 top-0 left-0"
        onClick={toggleSearchHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="py-2 px-3 text-slate-400 peer-focus:text-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
}
