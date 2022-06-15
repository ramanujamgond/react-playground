import './App.css';
// import bootstrap
import "bootstrap/dist/css/bootstrap.css";

// import bootstrap icon
import "bootstrap-icons/font/bootstrap-icons.css";


import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
