import React, {FC, useCallback, useMemo, useState} from 'react';
import {FolderI} from "../../interfaces/folder";
import File from "./../file/file";
import iconFolder from "./../../assets/icons/folder.svg"
import iconFolderOpen from "./../../assets/icons/folder-open.svg"

interface FolderPropsI {
    folder: FolderI
}

const Folder: FC<FolderPropsI> = ({folder}) => {
    const {name, items} = folder;

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const icon = useMemo(() => isOpen ? iconFolderOpen : iconFolder, [isOpen]);

    return (
        <li>
            <h3 onClick={handleOpen}>
                <img className="icon" src={icon} alt="icon"/>
                <span>{name}</span>
            </h3>
            {isOpen && <ul>
                {items.map((item) => {
                    if (item.type === "folder") {
                        return <Folder key={item.name} folder={item}/>
                    }

                    if (item.type === "file") {
                        return <File key={item.name} file={item}/>
                    }
                })}
            </ul>}
        </li>
    );
};

export default Folder;