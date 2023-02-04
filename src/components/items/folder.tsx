//HOOKS
import React, {FC, useCallback, useMemo} from 'react';
import {useToggle} from "../../hooks/useToggle";
//COMPONENTS
import File from "./file";
import ButtonIcon from "../buttons/button-icon";
//ICONS
import iconFolder from "./../../assets/icons/folder.svg"
import iconFolderOpen from "./../../assets/icons/folder-open.svg";
import iconDots from "../../assets/icons/dots-six.svg";
import iconAddFile from "../../assets/icons/file-plus.svg";
import iconAddFolder from "../../assets/icons/folder-plus.svg";
import iconRemove from "../../assets/icons/trash.svg";

//TYPES
import {FileI, FolderI} from "../../interfaces/folder";
import {DndI} from "../../interfaces/dnd";
import {TreeTypeT} from "../../classes/tree";
//STYLES
import "./items.scss";
//CONSTANTS
import {TYPE_OF_TREE} from "../../constants/type-of-tree";


interface FolderPropsI {
    folder: FolderI;
    dndHandlers: DndI;
    handleOpenCreator: (type: TreeTypeT, id: string) => void;
    handleRemove: (id: string) => void;
}

const Folder: FC<FolderPropsI> = (props) => {
    const {folder, dndHandlers, handleOpenCreator, handleRemove} = props;
    const {value: name, children: items, key: id, parent} = folder;

    const {dragOverHandler, dragLeaveHandler, dragStartHandler, dropHandler} = dndHandlers;

    const [isOpen, handleOpen] = useToggle(false);

    const icon = useMemo(() => isOpen ? iconFolderOpen : iconFolder, [isOpen]);

    const onOpen = useCallback((type: TreeTypeT) => {
        return () => handleOpenCreator(type, id)
    }, [id, handleOpenCreator]);

    const onRemove = (id: string) => {
        return () => handleRemove(id);
    }


    return (
        <li className='item item--folder'
            id={id}
            draggable={!!parent}
            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
            onDragStart={dragStartHandler}
            onDrop={dropHandler}
        >
            <h3 role="button" className="item__title">
                <img onClick={handleOpen} draggable={false} className="item__icon item__icon--folder" src={icon}
                     alt="icon"/>
                <span className="item__name" onDoubleClick={handleOpen}>{name}</span>
                <div className="item__actions">
                    <ButtonIcon icon={iconAddFolder} onClick={onOpen(TYPE_OF_TREE.FOLDER)}/>
                    <ButtonIcon icon={iconAddFile} onClick={onOpen(TYPE_OF_TREE.FILE)}/>
                    {!!parent && <ButtonIcon icon={iconRemove} onClick={onRemove(id)}/>}
                    {!!parent &&
                        <img draggable={false} className="item__icon item__icon--dnd" src={iconDots} alt="icon"/>}
                </div>
            </h3>
            {isOpen && <ul className="list">
                {!!items?.length && items.map((item) => item.type === TYPE_OF_TREE.FOLDER ?
                    <Folder key={item.key}
                            dndHandlers={dndHandlers}
                            handleRemove={handleRemove}
                            handleOpenCreator={handleOpenCreator}
                            folder={item as FolderI}/> :
                    <File handleRemove={handleRemove} dndHandlers={dndHandlers} key={item.value}
                          file={item as FileI}/>
                )}
            </ul>}
        </li>
    );
};

export default Folder;