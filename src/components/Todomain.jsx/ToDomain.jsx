function App(){
    const [todos,setTodos] =useState([])
    const [newInput,setInput] =useState('')
    const handleInputchange =(event)=>{
        setInput(event.target.value)
    }
    const addNewTodo=()=>{
        setTodos([...todos,{label:newInput,completed:false}]);
        setInput('')
    };
    const makeTodoDone=(index)=>{
        const temperory=[...todos]
        temperory[index].completed=true
        setTodos(temperory)
    }
    const deleteTodo=(index)=>{
        const temp=[...todos]
        temp.splice(index,1)
        setTodos(temp)
    }
    return(
        <div className="app-container">
            <div className="todo-box">
                <div>
                    <input type="text" onChange={handleInputchange} value={newInput}/>
                    <button onClick={addNewTodo}>Add</button>
                </div>
                <div>
                    {todos.map((ele,index)=> <Todolistitem label={ele.label}
                    count={index}key={index}completed={ele.completed}
                    makeTodoDone={makeTodoDone}deleteTodo={deleteTodo}/>)}
                </div>
            </div>
        </div>
    );
}

 export default App;