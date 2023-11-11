
import './App.css';
import TaskList from './TaskList';




function App() {
  return (
    <div className='container-fluid'>
      <div className='content'>
      <div className='card-container'>
      <TaskList cardTitle="To Do" listId="card1"/>
      </div>
      <div className='card-container'>
      <TaskList cardTitle="Doing" listId="card2"/>
      </div>
      <div className='card-container'>
      <TaskList cardTitle="Done" listId="card3"/>
      </div>
      </div>
    </div>
    
 
  );
}

export default App;


