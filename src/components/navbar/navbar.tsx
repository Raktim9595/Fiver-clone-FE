import { NavbarView } from './navbar-view';
import { useNavbar } from './use-navbar';

const Navbar = () => {
    const props = useNavbar();

    return <NavbarView {...props} />;
};

export default Navbar;
