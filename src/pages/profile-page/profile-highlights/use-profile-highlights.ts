import { ChangeEventHandler, useRef, useState } from 'react';

export const useProfileHighlights = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [fileUploadModal, setFileUploadModal] = useState(false);
    const [uploadConfirmationModal, setUploadConfirmationModal] = useState(false);

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
            alert('Please select a valid image file.');
            return;
        }

        const imageUrl: string = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        setFileUploadModal(false);
        setUploadConfirmationModal(true);
    };

    const handleSavePhoto = () => {
        setUploadConfirmationModal(false);
    };

    const closeConfirmationModal = () => {
        setUploadConfirmationModal(false);
    };

    return {
        ref,
        selectedImage,
        fileUploadModal,
        uploadConfirmationModal,
        openFileUploadModal,
        closeFileUploadModal,
        handleFileChange,
        handleSavePhoto,
        closeConfirmationModal,
    };
};
