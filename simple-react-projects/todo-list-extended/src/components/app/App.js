import { useState } from 'react';
import './App.css';
import TaskCreator from '../task-creator/TaskCreator';
import TaskList from '../task-list/TaskList';
import { BrowserRouter, Link } from 'react-router-dom';
import HomePage from '../home-page-component/HomePage';
import { Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NotFoundPage from '../not-found-page/NotFoundPage';
import AboutUsPage from '../about-us-page/AboutUsPage';

function App() {

  const [tasks, setTasks] = useState([]);

  const createTask = (title) => {
    const newTask = {
      title: title,
      id: uuidv4()
    }
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    const modifiedTasks = tasks.filter(t => t.id !== id);
    setTasks(modifiedTasks);
  }

  function uuidv4() {
    // eslint-disable-next-line
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/todo"}>TODO</Link>
        <Link to={"/about/pid=1"}>About us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={
          <>
            <TaskCreator onTaskCreate={(title) => createTask(title)} />
            <TaskList tasks={tasks} onTaskDelete={(id) => deleteTask(id)} />
          </>
        } />
        <Route path="/about/:pid" element={<AboutUsPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
