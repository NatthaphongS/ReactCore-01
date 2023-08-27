const listToDo = [{ info: "Task 1" }, { info: "Task 2" }, { info: "Task 3" }];
function Button() {
  return (
    <div className="form">
      <input type="text" className="form_input" />
      <button type="summit" className="form_submit">
        Add
      </button>
    </div>
  );
}
function ToDoList() {
  return (
    <div className="todolist">
      {listToDo.map((obj) => {
        return (
          <div className="todolist_task">
            <p className="todolist_task_info">{obj.info}</p>
            <button type="summit" className="todolist_task_btn">
              Edit
            </button>
            <button type="delete" className="todolist_task_btn">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Button />
      <ToDoList />
    </div>
  );
}
/*
function App() {
    const todos = [
        { id: 1, task: 'HW' },
        { id: 2, task: 'Hangout' },
        { id: 3, task: 'Sleep' },
    ];
    return (
        <div className='container'>
            // AddTodo Comp.
            <div className='todo__add'>
                <input type='text' />
                <button>Add</button>
            </div>

            //  TodoList = List of TodoItem 
            <div className='todo__container'>
                <ul className='todo__lists'>
                    {todos.map((obj) => (
                        <TodoItem todo={obj.task} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
*/

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
