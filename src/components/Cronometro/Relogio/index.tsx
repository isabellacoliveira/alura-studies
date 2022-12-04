import style from './Relogio.module.scss'; 

interface Props{
    time: number | undefined  
    // se o tempo for undefined, não for passado antes ou for nulo
    // vamos passar um valor padrão para ele  
}

export default function Relogio({ time = 0 } : Props){
    // vamos ter que fazer o trabalho inverso de passar de segundos para minutos 
    // agora que o tempo está em segundos , ele está junto mas temos que dividir 
    // o minuto do segundo Math.floor(para não ficarmos com numeros quebrados)
    const minutes = Math.floor(time / 60)
    // vamos pegar a parte que sobra e colocar nos segundos 
    const seconds = time % 60; 
    // estamos passando os minutos para string 
    // a string é um array de caracteres
    // sendo assim , a primeira posição do array é a dezena e a segunda é a unidade 
    // assim estamos pegando a dezena como primeiro item do array e a unidade como segundo 
    // o padStart permite que tenhamos uma cadeia de caracteres padrão e se não tiver o número 
    // minimo de caracteres, ele pega esses valores e transforma em alguns caracteres padrões 
    // ex: se for 1 ele coloca 01 , primeiro parametro (qual o length = 2 ), segundo: qual a string 
    // que queremos que apareça caso só tenha 1 caracter 
    const [minuteDez, minuteUnit] = String(minutes).padStart(2, '0');
    // vamos ter que atualizar o ts config.json 
    const [secondDez, secondUnit] = String(seconds).padStart(2, '0');; 

    return(
        <>
        {/* temos que pegar a dezena e a unidade de forma independente  */}
            <span className={style.relogioNumero}>{minuteDez}</span> 
            <span className={style.relogioNumero}>{minuteUnit}</span> 
            <span className={style.relogioDivisao}>:</span> 
            <span className={style.relogioNumero}>{secondDez}</span> 
            <span className={style.relogioNumero}>{secondUnit}</span> 
        </>     
    )
}