import { ProfileHighlightsView } from './profile-highlights-view';
import { useProfileHighlights } from './use-profile-highlights';

const ProfileHighlights = () => {
    const props = useProfileHighlights();
    return <ProfileHighlightsView {...props} />;
};

export default ProfileHighlights;
