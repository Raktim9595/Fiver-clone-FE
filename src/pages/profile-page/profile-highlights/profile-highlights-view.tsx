import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Check, CloudUpload, DeleteOutlined } from '@mui/icons-material';
import { CustomMenu } from '../../../components/custom-menu';
import { ProfileHighlightsModal } from './profile-highlights-modal';
import { type ProfileHighlightsViewProps } from './profile-highlights.types';
import { useMemo } from 'react';
import { type CustomMenuAction } from '../../../components/custom-menu/custom-menu-view.types';

export const ProfileHighlightsView = ({
    closeFileUploadModal,
    fileUploadModal,
    handleFileChange,
    handleSavePhoto,
    openFileUploadModal,
    selectedImage,
    closeConfirmationModal,
    confirmationModal,
    ref,
    handleCancelUpload,
}: ProfileHighlightsViewProps) => {
    const actions: CustomMenuAction[] = useMemo(
        () => [
            {
                label: 'Upload New Photo',
                onClick: openFileUploadModal,
                icon: <CloudUploadIcon fontSize="small" />,
            },
            {
                label: 'Remove Photo',
                onClick: () => {},
                icon: <DeleteOutlined fontSize="small" color="error" />,
            },
        ],
        [openFileUploadModal],
    );

    return (
        <Box sx={{ bgcolor: '#f7f7f7' }}>
            <Card variant="outlined" sx={{ borderRadius: 3, maxWidth: 760 }}>
                <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <Stack direction="row" spacing={3} sx={{ alignItems: 'flex-start' }}>
                        <Box sx={{ position: 'relative' }}>
                            <Avatar
                                src={selectedImage || undefined}
                                alt="John Smith"
                                sx={{
                                    width: 120,
                                    height: 120,
                                    fontSize: 42,
                                    bgcolor: '#d8d8d8',
                                }}
                            >
                                JS
                            </Avatar>

                            <CustomMenu
                                actions={actions}
                                iconButton
                                sx={{
                                    position: 'absolute',
                                    right: 2,
                                    bottom: 2,
                                    bgcolor: '#222',
                                    color: 'white',
                                    border: '3px solid white',
                                    '&:hover': { bgcolor: '#111' },
                                }}
                                icon={<CameraAltIcon fontSize="small" />}
                            />
                        </Box>
                    </Stack>
                </CardContent>
            </Card>

            <ProfileHighlightsModal
                open={fileUploadModal}
                onClose={closeFileUploadModal}
                headerText="Upload Profile Photo"
                body={
                    <>
                        <Box
                            onClick={() => ref.current?.click()}
                            sx={{
                                border: '2px dashed #d0d0d0',
                                borderRadius: 3,
                                p: 5,
                                textAlign: 'center',
                                cursor: 'pointer',
                                bgcolor: '#fafafa',
                                '&:hover': { bgcolor: '#f3fff8', borderColor: '#1dbf73' },
                            }}
                        >
                            <CloudUpload sx={{ fontSize: 54, color: 'text.secondary', mb: 1 }} />
                            <Typography sx={{ fontWeight: 700 }}>
                                Drag and drop your image here
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                                OR
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#1dbf73',
                                    '&:hover': { bgcolor: '#16a462' },
                                    mr: 1,
                                }}
                            >
                                Choose File
                            </Button>
                            <Typography variant="caption">
                                JPG, PNG or WEBP • Max size 5MB
                            </Typography>
                        </Box>

                        <input
                            ref={ref}
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleFileChange}
                        />
                    </>
                }
            />

            <ProfileHighlightsModal
                open={confirmationModal}
                onClose={closeConfirmationModal}
                headerText="Confirm Profile Photo"
                body={
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                        <Box
                            sx={{
                                width: 260,
                                height: 260,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '3px solid #1dbf73',
                                bgcolor: '#efefef',
                            }}
                        >
                            {selectedImage && (
                                <Box
                                    component="img"
                                    src={selectedImage}
                                    alt="Selected avatar preview"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                }
                footer={
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
                        <Button variant="outlined" onClick={handleCancelUpload}>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<Check />}
                            onClick={handleSavePhoto}
                            sx={{ bgcolor: '#1dbf73', '&:hover': { bgcolor: '#16a462' } }}
                        >
                            Save Photo
                        </Button>
                    </Stack>
                }
            />
        </Box>
    );
};
