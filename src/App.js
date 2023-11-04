import Header from './components/Header';
import Button from './components/Button';
import Todoitem from './components/Todoitem';
import './styles.css'; 
import './App.css';

function App() {
  return (
    <div className='todo-container'>
    <Header />
    <Todoitem />
    <Todoitem />
    <Todoitem />
    <Todoitem />
    <Button />
    </div>
  );
}

export default App;
