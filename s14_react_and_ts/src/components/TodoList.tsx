import { Todo } from '../index.model';

type TodoListProps = {
  items: Array<Todo>;
};

export function TodoList({ items }: TodoListProps): JSX.Element {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
