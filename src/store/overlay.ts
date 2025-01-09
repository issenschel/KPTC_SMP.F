import { create } from "zustand";

interface IOverlay {
    isOpen: boolean,
    setOpen: () => void,
    setClose: () => void
}

export const useOverlay = create<IOverlay>(set => ({
    isOpen: false,
    setOpen: () => set({ isOpen: true }),
    setClose: () => set({ isOpen: false })
}))