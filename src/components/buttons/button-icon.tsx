import React, {FC} from 'react';
//Style
import "./button.scss"

interface ButtonIconPropsI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
}

const ButtonIcon: FC<ButtonIconPropsI> = ({icon, ...rest}) => {
    return (
        <button className="button-icon" {...rest}>
            <img className="button-icon__img" src={icon} alt="icon"/>
        </button>
    );
};

export default ButtonIcon;