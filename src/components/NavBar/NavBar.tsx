import { listNavigation } from '../../helpers/listNavigation';

import styles from './NavBar.module.scss';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

interface NavBarProps {
  isOpenMenu: boolean;
}

const NavBar = ({ isOpenMenu }: NavBarProps) => {
  return (
    <nav className={`${styles.NavBar} ${isOpenMenu ? styles.active : ''}`}>
      <ul>
        {listNavigation.map((item, index) => {
          return (
            <li key={index}>
              <CustomNavLink url={item.url} linkTitle={item.navName} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavBar;
