import { ProfileHighlightsView } from './profile-highlights-view';
import { type ProfileHighlightsProps } from './profile-highlights.types';
import { useProfileHighlights } from './use-profile-highlights';

const ProfileHighlights = ({ user }: ProfileHighlightsProps) => {
    const props = useProfileHighlights(user.id);
    return <ProfileHighlightsView {...props} user={user} />;
};

export default ProfileHighlights;
