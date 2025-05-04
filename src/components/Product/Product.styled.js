// components/Product/Product.styled.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductGridContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.productGridBackground || '#f8f9fa'};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardContainer = styled(motion.article)`
  background: ${({ theme }) => theme.productCardBackground || '#ffffff'};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

// export const ProductImage = styled.img`
//   width: 100%;
//   height: 250px;
//   object-fit: cover;
//   border-bottom: 2px solid ${({ theme }) => theme.productImageBorder || '#ecf0f1'};
// `;

export const ProductInfo = styled.div`
  padding: 1.5rem;
  color: ${({ theme }) => theme.productTextColor || '#2c3e50'};
`;

// export const Price = styled.div`
//   font-size: 1.4rem;
//   font-weight: bold;
//   color: ${({ theme }) => theme.accentColor || '#e74c3c'};
//   margin: 1rem 0;
// `;

export const AddButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.8rem;
  background: ${({ theme }) => theme.buttonBackground || '#34495e'};
  color: ${({ theme }) => theme.buttonTextColor || '#ffffff'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.buttonHoverBackground || '#2c3e50'};
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.badgeBackground || '#e74c3c'};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
`;

// components/Product/Product.styled.js
export const ProductImage = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-bottom: 2px solid ${({ theme }) => theme.productImageBorder};
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Price = styled.div`
  font-size: ${({ theme }) => theme.priceSize};
  color: ${({ theme }) => theme.priceColor};
  font-weight: bold;
  margin: 1rem 0;
  
  &::after {
    content: ' FCFA';
    font-size: 0.8em;
    margin-left: 2px;
  }
`;