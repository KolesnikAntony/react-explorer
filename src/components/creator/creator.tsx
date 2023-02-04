//HOOKS
import React, {FC, useCallback, useState} from 'react';
//ICONS
import iconRemove from "../../assets/icons/trash.svg";
import iconAdd from "../../assets/icons/plus-circle.svg";
//COMPONENTS
import ButtonIcon from "../buttons/button-icon";
//TYPES
import {TreeTypeT} from "../../classes/tree";
//STYLES
import "./creator.scss";

interface CreatorPropsT {
    handleCancelCreate: () => void;
    handleAddItem: (parentId: string, type: TreeTypeT, value: string) => void;
    creator: {
        type: TreeTypeT;
        id: string;
        isOpen: boolean;
    }
}

const Creator: FC<CreatorPropsT> = ({handleCancelCreate, handleAddItem, creator}) => {
    const [value, setValue] = useState("");
    const {id, type} = creator;
    const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onCreate = useCallback(() => {
        handleAddItem(id, type, value)
        handleCancelCreate();
    }, [id, type, value, handleAddItem, handleCancelCreate]);


    return (
        <form className="creator" onSubmit={onCreate}>
            <h5 className="creator__title">Create new {creator.type}</h5>
            <div className="creator__actions">
                <input autoFocus onChange={handleSetValue} value={value} className="creator__input" type="text"
                       placeholder="File name"/>
                <ButtonIcon type="button" icon={iconRemove} onClick={handleCancelCreate}/>
                <ButtonIcon type="submit" icon={iconAdd}/>
            </div>
        </form>
    );
};

export default Creator;