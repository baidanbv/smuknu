import { NavLink } from 'react-router-dom';

import { listNavigation } from '../../helpers/listNavigation';

import styles from './NavBar.module.scss';

interface NavBarProps {
  isOpenMenu: boolean;
}

const NavBar = ({ isOpenMenu }: NavBarProps) => {
  return (
    <nav className={`${styles.NavBar} ${isOpenMenu ? styles.active : ''}`} data-testid="NavBar">
      <ul>
        {listNavigation.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.url} className={({ isActive }) => (isActive ? `${styles.activeLink}` : '')}>
                {item.navName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}; 
export default NavBar;
