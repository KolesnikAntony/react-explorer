//HOOKS
import {useCallback, useEffect, useState} from "react";
//TYPES
import {Tree, TreeTypeT} from "../classes/tree";
//UTILS
import {deepClone} from "../utils/deepClone";
import {v4 as uuidv4} from 'uuid';
//DATA
import {MOCK} from "../mock/mock";

type UseTreeT = {
    tree: Tree | null;
    handleMove: (itemId: string, dropId: string) => void;
    handleAdd: (parentId: string, type: TreeTypeT, value: string) => void;
    handleRemove: (id: string) => void;
}

export const useTree = (): UseTreeT => {
    const [tree, setTree] = useState<Tree | null>(null);

    useEffect(() => {
        const {root, children} = MOCK;
        const {key, type, value} = root;
        const rootTree = new Tree(key, type, value);
        children.forEach(child => {
            const {parentKey, type, key, value} = child;
            rootTree.insert(parentKey, type, key, value);
        })
        setTree(rootTree);
    }, [])


    const handleMove = useCallback((itemId: string, dropId: string) => {
        if (tree) {
            const item = tree.find(itemId);
            if (item) {
                const {type, key, value, children} = item;
                const newTree = deepClone<Tree>(tree);
                if (children.some(child => child.key === dropId)) {
                    console.log("ITS CHILD COMPONENT")
                    return
                }
                newTree.remove(itemId);
                newTree.insert(dropId, type, key, value, children);
                setTree(newTree)
            }
        }
    }, [tree])
    // eslint-disable-next-line
    const handleAdd = useCallback((parentId: string, type: TreeTypeT, value: string) => {
        if (tree) {
            const newTree = deepClone<Tree>(tree);
            newTree.insert(parentId, type, uuidv4(), value);
            setTree(newTree);
        }
    }, [tree])

    const handleRemove = useCallback((id: string) => {
        if (tree) {
            const newTree = deepClone<Tree>(tree);
            newTree.remove(id);
            setTree(newTree);
        }
    }, [tree])

    return {tree, handleMove, handleAdd, handleRemove};
}