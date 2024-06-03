import { useState } from "react";


const TodoCreate = ({TodoCreate}) => {
    const {title, setTitle} = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        TodoCreate(title);
        setTitle('');
    
    }

    return (
        <form onSubmit={handleSubmit} className="todo-create">
            <input type="text" name="title" id="title" placeholder="Enter a todo" onChange={handleChange} />  
        </form>
    )};
export default TodoCreate;