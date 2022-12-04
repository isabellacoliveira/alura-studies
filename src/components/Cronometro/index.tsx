import Button from "../Button/Index";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'; 
import { timeForSeconds } from "../../common/utils/time";
import { ITask } from "../../types/itask";
import { useEffect, useState } from 'react'; 
import { Decipher } from "crypto";
import { endianness } from "os";

interface Props {
    selected: ITask | undefined
    // vamos passar a função aqui 
    endTask: () => void
}

// vamos ter que pegar o finalizar tarefa como prop 
export default function Cronometro({ selected, endTask } : Props ){
    const [time, setTime] = useState<number>(timeForSeconds(String(selected?.time)))
    useEffect(() => {
        if(selected?.time) {
            setTime(timeForSeconds(selected.time))
        }
    }, [selected])

    function regressive(count: number = 0){
        setTimeout(() => {
            if(count > 0) {
                return regressive(count - 1)
            }
            // se não for ele finaliza a tarefa 
            endTask()
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Time: {time}
            <div className={style.relogioWrapper}>
                <Relogio time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Começar
            </Button>
        </div>
    )
}