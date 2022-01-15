type TodoListProps = {
  items: { id: string; text: string }[];
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
