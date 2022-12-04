import {useState} from 'react'; 
import Cronometro from '../components/Cronometro';
import Form from '../components/Formulario';
import List from '../components/List';
import { ITask } from '../types/itask';
import style from './App.module.scss'; 

function App() {
  const [tasks, setTasks] = useState<ITask[]>  ([]); 
  const [selected, setSelected] = useState<ITask>(); 

  function selectTask(selectedTask: ITask){
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected:  task.id === selectedTask.id ? true : false 
    })))
  }
  // criar função de finalizar tarefa 
  function endTask(){
    if(selected){
      // esta como undefined pois nao vamos estar selecionando nada 
      setSelected(undefined)
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id){
          // o tarefa.id é igual ao selecionado.id 
          return{
                  ...task, 
                  // pois ele não vai estar mais selecionado 
                  selected: false,
                  completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form  setTasks={setTasks}/>
      <List 
          tasks={tasks}
          selectTask={selectTask}
        />
      <Cronometro 
              selected={selected}
              endTask={endTask} // ao chegar a 0 
              // vamos ao tsx de cronometro 
          />
      
    </div>
  );
}

export default App;
