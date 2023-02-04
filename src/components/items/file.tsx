import React, {FC} from 'react';
import {FileI} from "../../interfaces/folder";
import iconFile from "./../../assets/icons/file.svg"

interface FilePropsI {
    file: FileI;
}

const File:FC<FilePropsI> = ({file}) => {
    const {name} = file;

    return (
        <li>
            <h3>
                <img className="icon" src={iconFile} alt="icon"/>
                <span>{name}</span>
            </h3>
        </li>
    );
};

export default File;