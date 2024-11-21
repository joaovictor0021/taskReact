import { ChevronLeft } from "lucide-react";
import Title from "../components/Title";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    const isCompleted = searchParams.get('status');
    let status = false

    if (isCompleted === "true") {
        status = true
    }


    return  (
        <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative">
                    <button onClick={() => navigate("/")} className="absolute left-0 bottom-0 top-0 text-slate-100">
                        <ChevronLeft/>
                    </button>
                    <Title>Gerador de Tarefas</Title>
                </div>
                <div className="w-[500px] bg-slate-200 rounded-md flex flex-col justify-center p-6">
                    <h1 className="text-2xl font-semibold text-slate-700">{title}</h1>
                    <h1 className="text-slate-700">{description}</h1>
                    <h1 className={`w-fit px-2 py-1 mt-3  font-semibold ${status ? "bg-green-300" : "bg-red-300"}`}>{status ? "Status: Tarefa concluida!" : "Status: Tarefa não concluida!"}</h1>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;