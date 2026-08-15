"use client";

import {
    createContext,
    useCallback,
    useContext,
    useState,
} from "react";

import { DemoModal } from "./demo-modal";

type DemoModalContextValue = {
    openDemoModal: () => void;
    closeDemoModal: () => void;
};

const DemoModalContext =
    createContext<DemoModalContextValue | null>(null);

type DemoModalProviderProps = {
    children: React.ReactNode;
};

export function DemoModalProvider({
    children,
}: DemoModalProviderProps) {
    const [open, setOpen] = useState(false);

    const openDemoModal = useCallback(() => {
        setOpen(true);
    }, []);

    const closeDemoModal = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <DemoModalContext.Provider
            value={{
                openDemoModal,
                closeDemoModal,
            }}
        >
            {children}

            <DemoModal
                open={open}
                onClose={closeDemoModal}
            />
        </DemoModalContext.Provider>
    );
}

export function useDemoModal() {
    const context =
        useContext(DemoModalContext);

    if (!context) {
        throw new Error(
            "useDemoModal must be used inside DemoModalProvider",
        );
    }

    return context;
}