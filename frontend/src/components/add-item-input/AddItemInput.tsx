import { useState } from "react";
import Input from "../input/Input";
import { useCreateNewTodoItemMutation } from "../../app/apis/todoItem.api";

export default function AddItemInput() {
  const [value, setValue] = useState("");
  const [addNewItem] = useCreateNewTodoItemMutation();

  const addNewItemHandler = async () => {
    addNewItem({ description: value });
  };

  return (
    <div className="h-11 w-full relative">
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        className="w-full"
      />
      <button
        onClick={addNewItemHandler}
        className="flex gap-4 px-4 text-white absolute items-center h-11 top-0 right-0 rounded-e-md bg-blue-500 hover:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
