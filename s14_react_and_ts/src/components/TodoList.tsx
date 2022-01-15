import { Todo } from '../index.model';
import './TodoList.css';

type TodoListProps = {
  items: Array<Todo>;
  onDeleteTodo: (todoId: string) => void;
};

export function TodoList({ items, onDeleteTodo }: TodoListProps): JSX.Element {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button type="button" onClick={() => onDeleteTodo(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
