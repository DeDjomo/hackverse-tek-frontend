// components/Menu/index.jsx
import { MenuContainer, BrandContainer, Logo, CompanyName, MenuList, MenuItem } from './Menu.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuItemComponent from './MenuItem';

const Menu = ({ items, theme, companyName, logo }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBrandClick = () => navigate('/');
  const handleItemClick = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <MenuContainer theme={theme}>
      <BrandContainer onClick={handleBrandClick}>
        {logo && <Logo src={logo} alt="Logo" />}
        {companyName && <CompanyName theme={theme}>{companyName}</CompanyName>}
      </BrandContainer>
      
      <MenuList>
        {items.map((item) => (
          <MenuItem key={item.path}>
            <MenuItemComponent
              item={item}
              isActive={location.pathname === item.path}
              onClick={handleItemClick(item.path)}
            />
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  theme: PropTypes.object,
  companyName: PropTypes.string,
  logo: PropTypes.string
};

export default Menu;