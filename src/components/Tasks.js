import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        //maps through tasks & sets them
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}
export default Tasks