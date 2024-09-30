import "./App.css";
import { useGetTodoItemsQuery } from "./app/apis/todoItem.api";
import AddItemInput from "./components/add-item-input/AddItemInput";
import Search from "./components/search/Search";
import TodoItem from "./components/todo-item/TodoItem";

function App() {
  const { data } = useGetTodoItemsQuery();

  return (
    <main className="p-5 flex flex-col gap-4">
      <div className="flex gap-2">
        <Search />
        <AddItemInput />
      </div>
      <div>
        {data?.map(item => <TodoItem description={item.description} />)}
      </div>
    </main>
  );
}

export default App;
