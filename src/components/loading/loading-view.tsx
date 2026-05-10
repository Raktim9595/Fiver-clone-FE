import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingView = ({ content }: { content?: string }) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                px: 2,
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 3,
                }}
            >
                <CircularProgress size={52} thickness={4} />

                {content && (
                    <Typography
                        variant="h6"
                        sx={{
                            mt: 3,
                            fontWeight: 600,
                        }}
                    >
                        {content}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default LoadingView;
