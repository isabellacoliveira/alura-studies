import { ITask } from '../../../types/itask';
import style from './Item.module.scss'; 
// criaremos um novo arquivo chamado item pois estamos usando o css de Lista 

interface Props extends ITask{
    selectTask: (selectedTask: ITask) => void
}

export default function Item({ 
                                task, 
                                time, 
                                selected, 
                                completed, 
                                id, 
                                selectTask 
                            }: Props){
    return (    
                <li
                // vamos ter que criar um ternario para completar tarefa 
                    className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : '' }`} 
                    // se ele não tiver completado ele executa o selecionar tarefa
                    onClick={() => !completed && selectTask({
                                                task, 
                                                time,
                                                selected, 
                                                completed,
                                                id
                })}>
                            <h3>{task}</h3>
                            <span>{time}</span>
                            {/* quando completado ele mostra algo, se não ele ignora  */}
                            {completed && <span className={style.concluido} aria-label="tarefa completada"></span>}
                </li>
    )
}

