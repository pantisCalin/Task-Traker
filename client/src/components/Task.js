
const Task = ({ task, onDelete, onToggle}) => {
    return (
        <div className = 'task' onDoubleClick = {() => onToggle(task.id)}>
            <h3 className = 'taskName'>{task.text}  
                <div className = 'xButton' onClick = {()=> onDelete(task.id)} > 
                    <div className = 'redBar'></div> 
                    <div className = 'redBar'></div>
                </div></h3> 
          
            <div className = 'taskDate '>{task.day} 
            <div  className = {` ${task.reminder ? 'trueReminder  tooltip' : 'falseReminder'} `}>
                <span className="tooltiptext">
                    Reminder is on
                </span>
            </div>  

            </div>
            
        </div>
    )
}

export default Task
