import { useNavigate } from "react-router-dom";
import Button from "./Button";
import {CheckIcon, ChevronRight, Trash} from "lucide-react"

function Task({tasks, onTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        query.set("status", task.isCompleted);

        navigate(`/taskDetails?${query.toString()}`)
    }


    return (
        <ul className="w-[500px] space-y-4 bg-slate-200 rounded-md flex flex-col justify-center p-6">
            {tasks.map(task => (
                <li key={task.id} className="flex gap-4">
                    <button onClick={() => onTaskClick(task.id)} className={`border-2 w-full border-slate-400 bg-slate-400 text-slate-100 text-start rounded-md px-2 py-2 flex gap-2 ${task.isCompleted && "line-through"} ${task.isCompleted && 'opacity-60'}`}>
                        {task.isCompleted && <CheckIcon/>}
                        {task.title}
                    </button>
                    
                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRight/>
                    </Button>

                    <Button onClick={() => onDeleteTaskClick(task.id)}>
                        <Trash/>
                    </Button>
                </li>
            ))}
        </ul>
    )
}

export default Task;