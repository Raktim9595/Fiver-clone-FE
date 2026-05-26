import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Check, CloudUpload, DeleteOutlined, Person } from '@mui/icons-material';
import { CustomMenu } from '../../../components/custom-menu';
import { ProfileHighlightsModal } from './profile-highlights-modal';
import { type ProfileHighlightsViewProps } from './profile-highlights.types';
import { useMemo } from 'react';
import { type CustomMenuAction } from '../../../components/custom-menu/custom-menu-view.types';

export const ProfileHighlightsView = ({
    handleFileChange,
    handleSavePhoto,
    changeProfileImageUploadState,
    profileImageUploadState,
    ref,
    handleCancelUpload,
    user,
    isUploading,
}: ProfileHighlightsViewProps) => {
    const { selectedImage, fileUploadModal, confirmationModal } = profileImageUploadState;
    const actions: CustomMenuAction[] = useMemo(
        () => [
            {
                label: 'Upload New Photo',
                onClick: () => changeProfileImageUploadState({ fileUploadModal: true }),
                icon: <CloudUploadIcon fontSize="small" />,
            },
            {
                label: 'Remove Photo',
                onClick: () => {}, // TODO: Implement remove photo functionality from BE and then on s3
                icon: <DeleteOutlined fontSize="small" color="error" />,
            },
        ],
        [changeProfileImageUploadState],
    );

    return (
        <Box sx={{ bgcolor: '#f7f7f7' }}>
            <Card variant="outlined" sx={{ borderRadius: 3, maxWidth: 760 }}>
                <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <Stack spacing={1} sx={{ alignItems: 'center' }}>
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
                                    {user.firstName[0].toUpperCase()}
                                    {user.lastName[0].toUpperCase()}
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
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {user.firstName} {user.lastName}
                        </Typography>
                        <Typography>@{user.username}</Typography>
                        <Stack
                            spacing={2}
                            direction="row"
                            sx={{
                                alignItems: 'center',
                                borderRadius: '0.5rem',
                                bgcolor: '#DCE5E0',
                                padding: '0.25rem 0.75rem',
                                cursor: 'pointer',
                            }}
                        >
                            <Person
                                fontSize="small"
                                sx={{
                                    color: '#2e7d32',
                                }}
                            />
                            <Typography
                                sx={{
                                    color: '#2e7d32',
                                    fontWeight: 500,
                                }}
                                variant="body2"
                            >
                                Buyer Account
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{
                                width: '100%',
                            }}
                            spacing={2}
                        >
                            <DisplayHelper
                                header="Member since"
                                content={user.createdAt.toLocaleLowerCase().split('t')[0]}
                            />
                            <DisplayHelper header="Account status" content="Active" />
                            <DisplayHelper header="Email" content={user.email} />
                            <DisplayHelper header="Phone" content={'+' + user.phoneNumber} />
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>

            <ProfileHighlightsModal
                open={fileUploadModal}
                onClose={() => changeProfileImageUploadState({ fileUploadModal: false })}
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
                onClose={() => changeProfileImageUploadState({ confirmationModal: false })}
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
                            loading={isUploading}
                        >
                            Save Photo
                        </Button>
                    </Stack>
                }
            />
        </Box>
    );
};

const DisplayHelper = ({ header, content }: { header: string; content: string }) => {
    return (
        <Stack
            direction="row"
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 500,
                }}
            >
                {header}:
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 500,
                }}
            >
                {content}
            </Typography>
        </Stack>
    );
};
