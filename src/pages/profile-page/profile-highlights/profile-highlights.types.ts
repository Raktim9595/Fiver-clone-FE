import { type ChangeEventHandler, type ReactNode, type RefObject } from 'react';
import { type User } from '../../../types/user.types';

export type ProfileHighlightsProps = {
    user: User;
};

export type ProfileHighligtsModalProps = {
    open: boolean;
    onClose: () => void;
    headerText: string;
    body: ReactNode;
    footer?: ReactNode;
};

export type UseProfileHighlights = (userId: string) => {
    ref: RefObject<HTMLInputElement | null>;
    profileImageUploadState: ProfileImageUplaodState;
    changeProfileImageUploadState: (newState: Partial<ProfileImageUplaodState>) => void;
    handleFileChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
    handleSavePhoto: () => void;
    handleCancelUpload: () => void;
    isUploading: boolean;
    imageUrl?: string;
    handleDeleteClick: () => void;
};

export type ProfileHighlightsViewProps = ReturnType<UseProfileHighlights> & ProfileHighlightsProps;

export type ProfileImageUplaodState = {
    selectedImage: string | null;
    fileUploadModal: boolean;
    confirmationModal: boolean;
    file: File | null;
};
