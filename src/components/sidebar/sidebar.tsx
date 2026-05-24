import { SidebarView } from './sidebar-view';
import { useSidebar } from './use-sidebar';

const Sidebar = () => {
    const props = useSidebar();
    return <SidebarView {...props} />;
};

export default Sidebar;
