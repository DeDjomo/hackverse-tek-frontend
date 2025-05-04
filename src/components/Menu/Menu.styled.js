// components/Menu/Menu.styled.js
import styled from 'styled-components';

// Partie Header
export const MenuContainer = styled.nav`
  background: ${({ theme }) => theme.menuBackground || '#2c3e50'};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export const CompanyName = styled.span`
  color: ${({ theme }) => theme.brandText || '#ffffff'};
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

// Partie Menu Items
export const MenuList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MenuItem = styled.li`
  position: relative;
`;

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.menuBorder || '#3498db'};
  border-radius: 8px;
  background: ${({ theme }) => theme.menuItemBackground || '#ffffff'};
  color: ${({ theme }) => theme.menuText || '#2c3e50'};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.menuHoverBackground || '#3498db'};
    color: ${({ theme }) => theme.menuHoverText || '#ffffff'};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
  }

  &.active {
    background: ${({ theme }) => theme.menuActiveBackground || '#2980b9'};
    color: white;
    border-color: transparent;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const IconWrapper = styled.span`
  font-size: 1.2rem;
`;