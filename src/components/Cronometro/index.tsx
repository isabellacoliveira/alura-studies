import Button from "../Button/Index";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'; 
import { timeForSeconds } from "../../common/utils/time";
import { ITask } from "../../types/itask";
import { useEffect, useState } from 'react'; 

interface Props {
    selected: ITask | undefined, 
    endTask: () => void
}

export default function Cronometro({ selected, endTask } : Props ){
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            setTime(timeForSeconds(selected.time))
        }
    }, [selected])

    function regressive(count: number = 0){
        setTimeout(() => {
            if(count > 0) {
                setTime(count - 1) 
                return regressive(count - 1)
            }
            endTask();
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Começar
            </Button>
        </div>
    )
}