import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function AddTask ({onCreateNewTask}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function validateInputs() {
        if (title !== "" && description !== "") {
            onCreateNewTask(title, description);
            setTitle('');
            setDescription('');
        } else {
            alert("É necessário preencher todos os campos!")
        }

        
    }
    
    return (
        <div className="w-[500px] space-y-4 bg-slate-200 rounded-md flex flex-col justify-center p-6">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Digite o título da tarefa"/>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Digite a descrição da tarefa"/>
            <Button onClick={() => validateInputs(title, description)}>Adicionar</Button>
        </div>

    )
}

export default AddTask;