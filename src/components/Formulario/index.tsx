import React from 'react'; 
import { ITask } from '../../types/itask';
import Button from '../Button/Index';
import  style from './Form.module.scss'; 
import { v4 as uuidv4 } from 'uuid'; 

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}>{
    state = {
        task: "", 
        time: "00:00:00"
    }
    addTask(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTasks(oldTasks => 
                                        [...oldTasks, 
                                            {
                                                ...this.state, 
                                                selected: false, 
                                                completed: false,
                                                id: uuidv4()
                                            }
                                        ]);
        this.setState({
            task: " ", 
            time: "00:00"
        })
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
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
                        value={this.state.task}
                        onChange={event => this.setState({...this.state, task: event.target.value})}
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
                        value={this.state.time}
                        onChange={event => this.setState({ ...this.state, time: event.target.value})}
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form; 