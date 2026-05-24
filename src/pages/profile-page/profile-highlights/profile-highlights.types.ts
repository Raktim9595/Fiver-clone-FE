import { ChangeEventHandler, ReactNode, RefObject } from 'react';

export type ProfileHighligtsModalProps = {
    open: boolean;
    onClose: () => void;
    headerText: string;
    body: ReactNode;
    footer?: ReactNode;
};

export type UseProfileHighlights = () => {
    ref: RefObject<HTMLInputElement | null>;
    selectedImage: string | null;
    fileUploadModal: boolean;
    uploadConfirmationModal: boolean;
    openFileUploadModal: () => void;
    closeFileUploadModal: () => void;
    handleFileChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
    handleSavePhoto: () => void;
    closeConfirmationModal: () => void;
};

export type ProfileHighlightsViewProps = ReturnType<UseProfileHighlights>;
