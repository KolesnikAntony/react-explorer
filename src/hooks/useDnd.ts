//HOOKS
import React, {useCallback, useRef, useState} from "react";
//TYPES
import {DndI, HandleMoveT} from "../interfaces/dnd";


export const useDnd = (handleMove: HandleMoveT): DndI => {
    const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
    const [dropFolderId, setDropFolderId] = useState<string | null>(null);
    const [currentItemId, setCurrentItemId] = useState<string | null>(null);

    const parentFolderRef = useRef<HTMLLIElement | null>(null);

    const dragOverHandler = (e: React.DragEvent) => {
        e.stopPropagation();
        e.preventDefault();
        const target = e.currentTarget as HTMLLIElement;
        parentFolderRef.current = target;

        if (target.classList.contains("item--folder")) {
            target.classList.add("drag-over");
            setDropFolderId(target.id)
        }
    }
    const dragLeaveHandler = (e: React.DragEvent) => {
        const target = e.currentTarget as HTMLLIElement;
        target.classList.remove("drag-over");
    }
    const dragStartHandler = (e: React.DragEvent) => {
        e.stopPropagation();
        const target = e.currentTarget as HTMLLIElement;
        const folder = target.closest(".item--folder");
        const folderId = folder?.id || null;
        setCurrentFolderId(folderId);
        setCurrentItemId(target.id);
    }
    const dropHandler = useCallback((e: React.DragEvent) => {
        e.preventDefault();

        if (currentItemId && dropFolderId && dropFolderId !== currentFolderId) {
            handleMove(currentItemId, dropFolderId)
        }

        parentFolderRef.current?.classList.remove("drag-over");

    }, [handleMove, currentItemId, dropFolderId, currentFolderId]);

    return {dragOverHandler, dragLeaveHandler, dragStartHandler, dropHandler};
}