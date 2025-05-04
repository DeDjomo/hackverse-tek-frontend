// components/Menu/MenuItem.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuLink, IconWrapper } from './Menu.styled.js';

const App = ({ item, isActive, onClick }) => {
  return (
    <MenuLink
      href={item.path}
      onClick={onClick}
      className={isActive ? 'active' : ''}
    >
      {item.icon && (
        <IconWrapper>
          <FontAwesomeIcon icon={item.icon} />
        </IconWrapper>
      )}
      {item.title}
    </MenuLink>
  );
};

export default App;