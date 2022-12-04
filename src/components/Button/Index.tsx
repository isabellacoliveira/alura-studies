import React from "react";
import style from './Button.module.scss'; 

class Button extends React.Component< any, {
    type?: "button" | "submit" | "reset" | undefined 
    // ele é opcional 
    onClick?: () => void 
}> {
    render() {
        const { type = "button", onClick } = this.props; 
        return (
            // se tiver um click no botão , a gente chama o click que estamos passando via props  
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button; 