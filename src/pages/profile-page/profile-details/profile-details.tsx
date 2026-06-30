import { ProfileDetailsView } from './profile-details-view';
import { useProfileDetails } from './use-profile-details';

const ProfileDetails = () => {
    const props = useProfileDetails();
    return <ProfileDetailsView {...props} />;
};

export default ProfileDetails;
