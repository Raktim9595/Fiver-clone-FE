import { type ChangeEventHandler, useRef, useState } from 'react';
import { useNotification } from '../../../providers/notification-provider';
import { type UseProfileHighlights } from './profile-highlights.types';

export const useProfileHighlights: UseProfileHighlights = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [fileUploadModal, setFileUploadModal] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(false);
    const { showNotification } = useNotification();

    const openFileUploadModal = () => {
        setFileUploadModal(true);
    };

    const closeFileUploadModal = () => {
        setFileUploadModal(false);
    };

    const handleFileChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            showNotification('Please select a valid image file.', 'error');
            return;
        }

        const imageUrl: string = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        setFileUploadModal(false);
        setConfirmationModal(true);
    };

    const handleSavePhoto = () => {
        setConfirmationModal(false);
    };

    const closeConfirmationModal = () => {
        setConfirmationModal(false);
    };

    const handleCancelUpload = () => {
        closeConfirmationModal();
        setSelectedImage(null);
    };

    return {
        ref,
        selectedImage,
        fileUploadModal,
        confirmationModal,
        openFileUploadModal,
        closeFileUploadModal,
        handleFileChange,
        handleSavePhoto,
        closeConfirmationModal,
        handleCancelUpload,
    };
};
