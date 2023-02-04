import React, {useState} from 'react';
import {FolderI} from "../../interfaces/folder";
import Folder from "../folder/folder";

const FolderList = () => {
    const [folders, setFolders] = useState<FolderI[]>([{
        name: "root",
        type: "folder",
        items: [
            {
                name: "Child Folder",
                type: "folder",
                items: [
                    {
                        name: "style.css",
                        type: 'file',
                    },
                    {
                        name: "bootstrap.css",
                        type: 'file',
                    }
                ]},
            {
                name: "index.html",
                type: 'file',
            },
            {
                name: "background.html",
                type: 'file',
            }
        ]
    }]);

    return (
        <ul className="folder__list">
            {folders.map((folder) => <Folder key={folder.name} folder={folder}/>)}
        </ul>
    );
};
export default FolderList;