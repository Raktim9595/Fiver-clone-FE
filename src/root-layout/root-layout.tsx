import { RootLayoutView } from './root-layout-view';
import { useRootLayout } from './use-root-layout';

const RootLayout = () => {
    const props = useRootLayout();
    return <RootLayoutView {...props} />;
};

export default RootLayout;
