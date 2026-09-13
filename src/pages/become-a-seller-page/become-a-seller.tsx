import { BecomeASellerPageView } from './become-a-seller-view';
import { useBecomeASeller } from './use-become-a-seller';

const BecomeASellerPage = () => {
    const props = useBecomeASeller();
    return <BecomeASellerPageView {...props} />;
};

export default BecomeASellerPage;
