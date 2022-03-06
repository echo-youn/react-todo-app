import CardList from './components/CardList';
import TodoCreator from './components/TodoCreator';

function App() {
  let todo = ['1', '2', '3'];
  let doing = ['4', '5', '6'];
  let done = ['7','8','9'];
  return (
    <div>
      <TodoCreator />
      <CardList type="todo" cards={todo} />
      <CardList type="doing" cards={doing} />
      <CardList type="todo" cards={done} />
    </div>
  );
}

export default App;
