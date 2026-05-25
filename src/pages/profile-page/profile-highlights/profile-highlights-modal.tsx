import { Close } from '@mui/icons-material';
import { Box, IconButton, Modal, Stack, Typography } from '@mui/material';
import { type ProfileHighligtsModalProps } from './profile-highlights.types';

export const ProfileHighlightsModal = ({
    open,
    onClose,
    headerText,
    body,
    footer,
}: ProfileHighligtsModalProps) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: 520 },
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    boxShadow: '1.5rem',
                    p: 3,
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        {headerText}
                    </Typography>
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Stack>
                {body}

                {footer}
            </Box>
        </Modal>
    );
};
