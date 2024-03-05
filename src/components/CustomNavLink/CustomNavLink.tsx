import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './CustomNavLink.module.scss';

interface CustomNavLinkProps { 
  url: string;
  linkTitle: string;
}

const CustomNavLink = ({ url, linkTitle }: CustomNavLinkProps) => {
  const resolved = useResolvedPath(url);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <NavLink to={url} className={match ? styles.activeLink : ''}>
      {linkTitle}
    </NavLink>
  );
};

export default CustomNavLink