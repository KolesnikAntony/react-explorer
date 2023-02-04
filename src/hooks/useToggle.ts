import {useCallback, useState} from "react";

type UseToggleT = [boolean, () => void];

export const useToggle = (state: boolean): UseToggleT => {
    const [isOpen, setIsOpen] = useState(state);

    const handleOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);
    return [isOpen, handleOpen];
}