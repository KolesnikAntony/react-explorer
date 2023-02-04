import React from "react";

type DndEventFnT = (e: React.DragEvent) => void;

export interface DndI {
    dragOverHandler: DndEventFnT
    dragLeaveHandler: DndEventFnT
    dragStartHandler: DndEventFnT
    dropHandler: DndEventFnT
}

export type HandleMoveT = (itemId: string, dropId: string) => void;