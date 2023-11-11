import React, { useState, useEffect } from 'react';
import './NavbarStyle.css';
import { v4 as uuidv4 } from 'uuid';

const TaskList = ({ cardTitle, listId }) => {
  const [newTask, setNewTask] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');
  const STORAGE_KEY = `tasks_${listId}`;
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return Array.isArray(storedTasks) ? storedTasks : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, STORAGE_KEY]);

  const handleAddTask = () => {
    setIsAddingTask(true);
  };
  const handleCancel = () => {
    setIsAddingTask(false);
  };

  const handleEditTask = (taskId, taskText) => {
    setEditingTaskId(taskId);
    setEditTaskText(taskText);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const newTaskObject = { id: uuidv4(), text: newTask };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
      setIsAddingTask(false);
    }
  };

  const handleEditSave = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
    setEditingTaskId(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setEditingTaskId(null);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h6 style={{fontWeight:"bolder"}}>{cardTitle}</h6>
      </div>
      <div className="card-body" >
        <ul style={{
          listStyle: 'none',
          padding: 0,
        }}>
          {tasks.map((task, index) => (
            <li
              key={task.id}
              style={{
                margin: '8px',
                padding: '2px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                background: 'white',
                height: 'auto',
                width: '22rem',
              }}
            >
              {editingTaskId === task.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEditSave(task.id, editTaskText);
                  }}
                >
                  <div className='input-group'>
                    <textarea
                      className="form-control"
                      type="text"
                      value={editTaskText}
                      onChange={(e) => setEditTaskText(e.target.value)}
                      autoFocus
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <div
                    style={{
                      marginRight: '5px',
                      flex: '1',
                      wordWrap: 'break-word',
                      maxWidth: '280px',
                      
                    }}
                  >
                    {task.text}
                  </div>
                  <button
                    onClick={() => handleEditTask(task.id, task.text)}
                    className='edit'
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{ color: 'black' }}
                    >
                      edit
                    </i>
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className='delete'
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{ color: 'black' }}
                    >
                      delete
                    </i>
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        {isAddingTask && (
          <form onSubmit={handleSubmitTask} className='addingtask'>
            <label>
              <div className='input-group'>
                <textarea
                  className="form-control"
                  style={{ border: '2px solid #ddd' }}
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  autoFocus
                ></textarea>
              </div>
            </label>
            <br></br>
            <button type="submit" className="btn btn-primary btn-sm">
              Add
            </button>
            <button onClick={handleCancel} className="btn btn-danger btn-sm cancel">
              Cancel
            </button>
          </form>
        )}
      </div>
      {isAddingTask ? (
        ''
      ) : (
        <button className='addtask' onClick={handleAddTask}>
          +Add Task
        </button>
      )}
    </div>
  );
};

export default TaskList;
