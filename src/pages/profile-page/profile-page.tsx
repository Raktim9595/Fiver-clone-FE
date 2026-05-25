import { ProfilePageView } from './profile-page-view';
import { useProfilePage } from './use-profile-page';

const ProfilePage = () => {
    const props = useProfilePage();
    return <ProfilePageView {...props} />;
};

export default ProfilePage;
