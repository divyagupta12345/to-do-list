import React from "react";

const ToDoLists=(props)=>{
    
        console.log("deleted");
    
    return(
        <>
        <div className="todo_style">
        <i className ="fa fa-times"
        aria-hidden="true"
        onClick={()=>props.onSelect()}></i>
     <li>{props.text}</li>
     </div>
     </>
     );
};
export default ToDoLists;