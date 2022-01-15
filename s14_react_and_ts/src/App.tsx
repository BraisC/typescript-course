import { TodoList } from './components/TodoList';

function App(): JSX.Element {
  const todos = [{ id: 't1', text: 'Finish the course' }];
  return (
    <div className="app">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
