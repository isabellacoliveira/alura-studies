import React, { useState } from 'react'; 
import { ITask } from '../../types/itask';
import Button from '../Button/Index';
import  style from './Form.module.scss'; 
import { v4 as uuidv4 } from 'uuid'; 

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props){
    const[task, setTask] = useState("")
    const[time, setTime] = useState("00:00")

   function addTask(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTasks(oldTasks => 
                                        [...oldTasks, 
                                            {
                                                // aqui teremos que criar um state para tarefa e um para tempo 
                                                task, 
                                                time,
                                                selected: false, 
                                                completed: false,
                                                id: uuidv4()
                                            }
                                        ]);
        setTask("");
        setTime("00:00")
    }
    return(
        <form className={style.novaTarefa} onSubmit={addTask}>
                <div className={style.inputContainer}> 
                    <label htmlFor="tarefa">
                        Adicione um novo estudo 
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                        value={task}
                        onChange={event => setTask(event.target.value)}
                    />
                    
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo 
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00.00:00"
                        max="01:30:00"
                        required
                        value={time}
                        onChange={event => setTime(event.target.value)}
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
    )
}

export default Form; 