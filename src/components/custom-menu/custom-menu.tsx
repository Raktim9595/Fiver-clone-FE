import { CustomMenuView } from './custom-menu-view';
import { type CustomMenuProps } from './custom-menu-view.types';
import { useCustomMenu } from './use-custom-menu';

const CustomMenu = (props: CustomMenuProps) => {
    const viewProps = useCustomMenu();
    return <CustomMenuView {...props} {...viewProps} />;
};

export default CustomMenu;
