import { type ChangeEventHandler, useRef, useState } from 'react';
import { useNotification } from '../../../providers/notification-provider';
import {
    type ProfileImageUplaodState,
    type UseProfileHighlights,
} from './profile-highlights.types';
import {
    type FileSearchApiResponse,
    FileSearchResponseData,
    type FilesSearchRequestBody,
    FileStatus,
    FileType,
    type FileUploadPostRequest,
    fileUploadPostRequestInitialValue,
    type GetUploadUrlAndUploadFileArgs,
} from '../../../types/file-upload.types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { type ApiErrorResponse } from '../../../types/response.types';
import { getUploadUrlAndUploadFile, searchFile } from '../../../services/file-upload';
import { QUERY_CONSTANT } from '../../../utils/query-constants';

export const useProfileHighlights: UseProfileHighlights = (userId: string) => {
    const { showNotification } = useNotification();
    // Tanstack query setups
    const { mutate: getUploadUrlMutation, isPending: isUploading } = useMutation<
        void,
        ApiErrorResponse,
        GetUploadUrlAndUploadFileArgs
    >({
        mutationKey: [QUERY_CONSTANT.GET_UPLOAD_URL, userId],
        mutationFn: getUploadUrlAndUploadFile,
        onSuccess: () => {
            showNotification('Profile picture updated successfully', 'success');
            changeProfileImageUploadState({
                confirmationModal: false,
                fileUploadModal: false,
            });
        },
        onError: () => {
            showNotification('Failed to upload profile picture. Please try again.', 'error');
        },
    });

    const fileSearchRequestBody: FilesSearchRequestBody = {
        userId,
        type: FileType.PROFILE_PICTURE,
        status: FileStatus.UPLOADED,
    };

    // Get the profile image of the user
    const { data: files } = useQuery<
        FileSearchApiResponse,
        ApiErrorResponse,
        // FileSearchResponseData[],
        FileSearchApiResponse,
        [string, FilesSearchRequestBody]
    >({
        queryKey: [QUERY_CONSTANT.USER_PROFILE_IMAGE, fileSearchRequestBody],
        queryFn: searchFile,
        enabled: !!userId,
    });

    // Hooks initialization
    const ref = useRef<HTMLInputElement>(null);
    const [profileImageUploadState, setProfileImageUploadState] = useState<ProfileImageUplaodState>(
        {
            selectedImage: null,
            fileUploadModal: false,
            confirmationModal: false,
            file: null,
        },
    );
    const [fileUploadPostRequestData, setFileUploadPostRequestData] =
        useState<FileUploadPostRequest>(fileUploadPostRequestInitialValue);

    const changeProfileImageUploadState = (newState: Partial<ProfileImageUplaodState>) => {
        setProfileImageUploadState((prevState) => ({
            ...prevState,
            ...newState,
        }));
    };

    const handleFileChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (event) => {
        const file = event.target.files?.[0];
        if (!file) {
            showNotification('No file selected for upload.', 'error');
            return;
        }

        if (!file.type.startsWith('image/')) {
            showNotification('Please select a valid image file.', 'error');
            return;
        }

        setFileUploadPostRequestData({
            contentType: file.type,
            fileName: file.name,
            fileSize: file.size,
            userId,
            type: FileType.PROFILE_PICTURE,
        });

        const imageUrl: string = URL.createObjectURL(file);
        changeProfileImageUploadState({
            selectedImage: imageUrl,
            fileUploadModal: false,
            confirmationModal: true,
            file,
        });
    };

    const handleSavePhoto = () => {
        getUploadUrlMutation({
            body: fileUploadPostRequestData,
            file: profileImageUploadState.file!,
        });
    };

    const handleCancelUpload = () => {
        changeProfileImageUploadState({
            selectedImage: null,
            fileUploadModal: false,
            confirmationModal: false,
            file: null,
        });
    };

    return {
        ref,
        profileImageUploadState,
        changeProfileImageUploadState,
        handleFileChange,
        handleSavePhoto,
        handleCancelUpload,
        isUploading,
        imageUrl: files?.data?.[0].imageUrl,
    };
};
