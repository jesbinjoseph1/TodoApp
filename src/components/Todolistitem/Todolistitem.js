import React from 'react'
import './Todolistitem.css'
function Todolistitem({count,label,completed,makeTodoDone,deleteTodo}){
    return(
        <div className='Listitem'>
            <h3 className={`${completed? 'done':""}`}>{count+1}.{label}</h3>
            <button onClick={()=>deleteTodo(count)}>Delete</button>
            {!completed && <button onClick={()=>makeTodoDone(count)}>Done</button>}
        </div>
    )
}
export default Todolistitem