import { NavbarView } from './navbar-view';
import { type NavbarProps } from './navbar.types';
import { useNavbar } from './use-navbar';

const Navbar = ({ user }: NavbarProps) => {
    const props = useNavbar();

    return <NavbarView {...props} user={user} />;
};

export default Navbar;
