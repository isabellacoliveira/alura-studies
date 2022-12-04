import style from './Relogio.module.scss'; 

interface Props{
    time: number | undefined  
}

export default function Relogio({ time = 0 } : Props){
    const minutes = Math.floor(time / 60)
    const seconds = time % 60; 
    const [minuteDez, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondDez, secondUnit] = String(seconds).padStart(2, '0');; 

    return(
        <>
            <span className={style.relogioNumero}>{minuteDez}</span> 
            <span className={style.relogioNumero}>{minuteUnit}</span> 
            <span className={style.relogioDivisao}>:</span> 
            <span className={style.relogioNumero}>{secondDez}</span> 
            <span className={style.relogioNumero}>{secondUnit}</span> 
        </>     
    )
}