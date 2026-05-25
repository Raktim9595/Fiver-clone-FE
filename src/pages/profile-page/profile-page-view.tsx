import { Stack } from '@mui/material';
import { ProfileHighlights } from './profile-highlights';
import { type ProfilePageViewProps } from './profile-page.types';
import { LoadingView } from '../../components/loading';

export const ProfilePageView = ({ user, isLoading }: ProfilePageViewProps) => {
    if (isLoading) return <LoadingView />;

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
                <ProfileHighlights user={user!} />
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
