import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';

function App(): JSX.Element {
  const todos = [{ id: 't1', text: 'Finish the course' }];

  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="app">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
