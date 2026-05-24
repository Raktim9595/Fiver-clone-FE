import { Box, Stack, Typography } from '@mui/material';
import { ProfileHighlights } from './profile-highlights';

export const ProfilePageView = () => {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                padding: '1rem',
            }}
        >
            {/* Here we write the profile info where there is the image upload  */}
            <Stack
                sx={{
                    flex: 3,
                    bgcolor: 'red',
                }}
            >
                <ProfileHighlights />
            </Stack>

            {/* This one is a form like structure where we do the updates to the profile information */}
            <Stack
                sx={{
                    flex: 7,
                    bgcolor: 'green',
                }}
            >
                done again
            </Stack>
        </Stack>
    );
};
