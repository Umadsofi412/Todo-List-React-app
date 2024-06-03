import { useState } from "react";
import TodoEdit from "./TodoEdit";

const TodoShow = ({todo, removeTodo, changeTodo}) => {
    const  [showEdit, setShowEdit] = useState(false)
    const handleDelete = (e) =>{
        removeTodo(todo.id)
    }
    const handleEdit = (e) => {
        setShowEdit(true)
    }
    const handleDoubleClick = (e) =>{
        changeTodo(todo.id,todo.title, !todo.compeleted)
    }
    const handleSubmit = (e)=>{
        changeTodo(id, title)
        setShowEdit(false)
    }
    if(showEdit){
        return(
            <li className="todo">
                <TodoEdit todo ={todo} onSubmit ={handleSubmit}/>
            </li>
        );
    }
    return(
        <li className="todo" onDoubleClick={handleDoubleClick}>
            <p className={todo.compeleted && 'completed'}>{todo.title}</p>
            <div className="actions">
                <button onClick={handleDelete}>
                    <img src={DeleteIcon} title="Delete"/>
                </button>
                <button onClick={handleEdit}>
                    <img src={EditIcon} title="Edit"/>
                </button>
            </div>
        </li>
    )
}
export default TodoShow;