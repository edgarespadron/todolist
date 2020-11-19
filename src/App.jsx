import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Tasks'

function App() {
  const [input,setInput] = useState("");
  const [tasks,setTasks] = useState([]);

  const handleAddTask = e => {
    e.preventDefault();
    let t = {
      title: input,
      isCompleted: false
    }
    setTasks([...tasks,t]);
    setInput("");
  }
  const handleCheck = (e,idx) => {
    let t = tasks[idx];
    t.isCompleted = !t.isCompleted;
    setTasks([...tasks.slice(0,idx),t,...tasks.slice(idx+1)])
  }
  const handleDestroyTask = (e,idx) => {
    setTasks([...tasks.slice(0,idx),...tasks.slice(idx+1)])
  }
  return(
    <div className="App">
      <form onSubmit={handleAddTask} className="mx-auto col-4 bg-dark text-warning p-5">
      <h2 className="text center">Add A Task</h2>
        <div className="form-group">
          <input 
          type="text" 
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          />
        </div>
        <input type="submit" value="Add" className="btn btn-warning btn-outline-dark"/>
      </form>
      <div className="d-flex flex-col col-8 mx-auto justify-content-center">
        {
          tasks.map((t,i) => {
            return <Task
                    idx={i}
                    handleCheck={handleCheck}
                    task={t}
                    handleDestroyTask={handleDestroyTask}

            
            />
          })
        }
      </div>
    </div>
  );
  
}
export default App;
