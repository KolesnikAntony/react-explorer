import React, {useMemo} from 'react';
//HOOKS
import {useTree} from "../../hooks/useTree";
import {useDnd} from "../../hooks/useDnd";
import {useCreator} from "../../hooks/useCreator";
//COMPONENTS
import Folder from "../items/folder";
import Creator from "../creator/creator";
//STYLES
import "./list.scss"


const List = () => {
    const {tree, handleMove, handleAdd, handleRemove} = useTree();
    const dndHandlers = useDnd(handleMove);
    const folders = useMemo(() => tree ? Object.values(tree) : null, [tree]);
    const {creator, handleOpenCreator, handleCancelCreate} = useCreator();

    return (
        <aside className="sidebar">
            {creator.isOpen &&
                <Creator handleAddItem={handleAdd} creator={creator} handleCancelCreate={handleCancelCreate}/>}
            <ul className="list">
                {!!folders?.length && folders.map((folder) => <Folder key={folder.key} folder={folder}
                                                                      handleOpenCreator={handleOpenCreator}
                                                                      dndHandlers={dndHandlers}
                                                                      handleRemove={handleRemove}
                />)}
            </ul>
        </aside>
    );
};
export default List;