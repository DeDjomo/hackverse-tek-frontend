// components/Footer/Footer.styled.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.footerBackground || '#2c3e50'};
  color: ${({ theme }) => theme.footerText || '#ecf0f1'};
  padding: 3rem 2rem 1rem;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;

  h3 {
    color: ${({ theme }) => theme.footerHeading || '#e74c3c'};
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

export const PartnerSection = styled.div`
  .partners-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    .partner-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.5rem;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(5px);
      }

      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }

      span {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.footerText};
      }
    }
  }
`;

export const ContactInfo = styled.div`
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 0.9rem;

      svg {
        color: ${({ theme }) => theme.footerIcon || '#e74c3c'};
      }
    }
  }
`;

export const LegalLinks = styled.div`
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;

      a {
        color: ${({ theme }) => theme.footerText};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.footerLinkHover || '#e74c3c'};
        }
      }
    }
  }
`;

export const SocialMedia = styled.div`
  .social-icons {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;

    a {
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-3px);
      }

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.footerBorder || '#34495e'};
  font-size: 0.8rem;
  line-height: 1.6;
`;