import React from 'react';
import style from './button.module.scss'

interface ButtonProps {
    text : string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Button ({onClick, type, text} : ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {text}
        </button>
    )
}


class refactoButton extends React.Component<{
    text : string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void}> {
    render() {
        const { type = 'button', onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.button}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;