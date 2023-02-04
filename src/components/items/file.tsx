import React, {FC} from 'react';
//ICONS
import iconFile from "../../assets/icons/file.svg";
import iconDots from "../../assets/icons/dots-six.svg";
import iconRemove from "../../assets/icons/trash.svg";
//TYPES
import {DndI} from "../../interfaces/dnd";
import {FileI} from "../../interfaces/folder";
//STYLES
import "./items.scss";
//COMPONENTS
import ButtonIcon from "../buttons/button-icon";


interface FilePropsI {
    file: FileI;
    dndHandlers: DndI;
    handleRemove: (id: string) => void;
}

const File: FC<FilePropsI> = ({file, dndHandlers, handleRemove}) => {
    const {value: name, key: id} = file;
    const {dragOverHandler, dragLeaveHandler, dragStartHandler, dropHandler} = dndHandlers;

    const onRemove = (id: string) => {
        return () => handleRemove(id);
    }

    return (
        <li className="item"
            draggable={true}
            id={id}
            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
            onDragStart={dragStartHandler}
            onDrop={dropHandler}
        >
            <h3 className="item__title">
                <img className="item__icon" src={iconFile} alt="icon" draggable={false}/>
                <span className="item__name">{name}</span>
                <div className="item__actions">
                    <ButtonIcon icon={iconRemove} onClick={onRemove(id)}/>
                    <img draggable={false} className="item__icon item__icon--dnd" src={iconDots} alt="icon"/>
                </div>
            </h3>
        </li>
    );
};

export default File;