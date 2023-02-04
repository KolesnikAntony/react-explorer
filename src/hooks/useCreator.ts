import {useCallback, useEffect, useMemo, useState} from "react";
import {TYPE_OF_TREE} from "../constants/type-of-tree";
import {TreeTypeT} from "../classes/tree";

export const useCreator = () => {
    const [creator, setCreator] = useState(
        {
            isOpen: false,
            id: "",
            type: TYPE_OF_TREE.FOLDER
        }
    );

    const creatorMemo = useMemo(() => creator, [creator]);

    const handleOpenCreator = useCallback((type: TreeTypeT, id: string) => {
        setCreator(prev => ({...prev, isOpen: true, type, id}));
    }, []);

    const handleCancelCreate = useCallback(() => {
        setCreator(prev => ({...prev, isOpen: false, id: ""}));
    }, [])

    const escFunction = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape") {
           creator.isOpen && handleCancelCreate();
        }
    }, [creator]);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return {
        creator: creatorMemo, handleOpenCreator, handleCancelCreate
    }
}