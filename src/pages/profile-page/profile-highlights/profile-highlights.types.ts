import { type ChangeEventHandler, type ReactNode, type RefObject } from 'react';

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
    confirmationModal: boolean;
    openFileUploadModal: () => void;
    closeFileUploadModal: () => void;
    handleFileChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
    handleSavePhoto: () => void;
    closeConfirmationModal: () => void;
    handleCancelUpload: () => void;
};

export type ProfileHighlightsViewProps = ReturnType<UseProfileHighlights>;
