import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../../utils/test-wrapper';
import { useProfileHighlights } from './use-profile-highlights';
import { act } from '@testing-library/react';
import { mockShowNotification } from '../../../utils/test-setups';

beforeEach(() => {
    vi.clearAllMocks();
    URL.createObjectURL = vi.fn(() => 'mocked-image-url');
});

describe('useProfileHighlights Hook, Unit Test', () => {
    describe('When initialized', () => {
        test('Then it should return proper values', () => {
            const { result } = renderHookWithWrapper(() => useProfileHighlights());

            expect(result.current).toEqual({
                ref: expect.any(Object),
                selectedImage: null,
                fileUploadModal: false,
                confirmationModal: false,
                openFileUploadModal: expect.any(Function),
                closeFileUploadModal: expect.any(Function),
                handleFileChange: expect.any(Function),
                handleSavePhoto: expect.any(Function),
                closeConfirmationModal: expect.any(Function),
                handleCancelUpload: expect.any(Function),
            });
        });
    });

    describe('When called openFileUploadModal', () => {
        test('Then it should set fileUploadModal to true', () => {
            const { result } = renderHookWithWrapper(() => useProfileHighlights());

            act(() => {
                result.current.openFileUploadModal();
            });
            expect(result.current.fileUploadModal).toBe(true);
        });
    });

    describe('When called closeFileUploadModal', () => {
        test('Then it should set fileUploadModal to false', () => {
            const { result } = renderHookWithWrapper(() => useProfileHighlights());

            act(() => {
                result.current.openFileUploadModal();
            });

            act(() => {
                result.current.closeFileUploadModal();
            });
            expect(result.current.fileUploadModal).toBe(false);
        });
    });

    describe('When called handleFileChange', () => {
        describe('And image file is selected', () => {
            test('Then it should set selectedImage and open confirmation modal', () => {
                const { result } = renderHookWithWrapper(() => useProfileHighlights());

                const file = new File(['image-content'], 'profile.png', {
                    type: 'image/png',
                });

                const event = {
                    target: {
                        files: [file],
                    },
                } as unknown as React.ChangeEvent<HTMLInputElement>;

                act(() => {
                    result.current.handleFileChange(event);
                });

                expect(URL.createObjectURL).toHaveBeenCalledWith(file);
                expect(result.current.selectedImage).toBe('mocked-image-url');
                expect(result.current.fileUploadModal).toBe(false);
                expect(result.current.confirmationModal).toBe(true);
            });
        });

        describe('And non-image file is selected', () => {
            test('Then it should show error notification', () => {
                const { result } = renderHookWithWrapper(() => useProfileHighlights());

                const file = new File(['image-content'], 'profile.png', {
                    type: 'text/plain',
                });

                const event = {
                    target: {
                        files: [file],
                    },
                } as unknown as React.ChangeEvent<HTMLInputElement>;

                act(() => {
                    result.current.handleFileChange(event);
                });

                expect(result.current.selectedImage).toBe(null);
                expect(result.current.fileUploadModal).toBe(false);
                expect(result.current.confirmationModal).toBe(false);
                expect(mockShowNotification).toHaveBeenCalledWith(
                    'Please select a valid image file.',
                    'error',
                );

                expect(URL.createObjectURL).not.toHaveBeenCalled();
            });
        });

        describe('And no file is selected', () => {
            test('Then it should do nothing', () => {
                const { result } = renderHookWithWrapper(() => useProfileHighlights());

                const event = {
                    target: {
                        files: [],
                    },
                } as unknown as React.ChangeEvent<HTMLInputElement>;

                act(() => {
                    result.current.handleFileChange(event);
                });

                expect(result.current.selectedImage).toBe(null);
                expect(result.current.fileUploadModal).toBe(false);
                expect(result.current.confirmationModal).toBe(false);
                expect(mockShowNotification).not.toHaveBeenCalled();
                expect(URL.createObjectURL).not.toHaveBeenCalled();
            });
        });
    });

    describe('When called handleSavePhoto', () => {
        test('Then it should close confirmation modal', () => {
            const { result } = renderHookWithWrapper(() => useProfileHighlights());

            act(() => {
                result.current.openFileUploadModal();
            });

            act(() => {
                result.current.handleSavePhoto();
            });

            expect(result.current.confirmationModal).toBe(false);
        });
    });

    describe('When called closeConfirmationModal', () => {
        test('Then it should close confirmation modal', () => {
            const { result } = renderHookWithWrapper(() => useProfileHighlights());

            act(() => {
                result.current.openFileUploadModal();
            });

            act(() => {
                result.current.closeConfirmationModal();
            });

            expect(result.current.confirmationModal).toBe(false);
        });
    });

    describe('When called handleCancelUpload', () => {
        test('Then it should close confirmation modal', () => {
            const { result } = renderHookWithWrapper(() => useProfileHighlights());

            act(() => {
                result.current.openFileUploadModal();
            });
            act(() => {
                result.current.handleCancelUpload();
            });

            expect(result.current.confirmationModal).toBe(false);
            expect(result.current.selectedImage).toBe(null);
        });
    });
});
