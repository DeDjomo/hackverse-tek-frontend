// styles/Home.styled.js
import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const SellerLinkButton = styled.div`
  text-align: center;
  margin: 3rem 0;

  a {
    display: inline-block;
    padding: 1.2rem 2.5rem;
    background: ${({ theme }) => theme.navigation?.sellerButton || '#2ecc71'};
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const ContentWrapper = styled.section`
  padding: 4rem 0;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.dashboard?.primaryText || '#2c3e50'};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: ${({ theme }) => theme.dashboard?.accent || '#e74c3c'};
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;