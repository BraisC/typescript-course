import { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

export function NewTodo({ onAddTodo }: NewTodoProps): JSX.Element {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value;
      onAddTodo(enteredText);
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}
