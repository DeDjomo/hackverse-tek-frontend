// components/SellerDashboard/SellerDashboard.styled.js
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.dashboard?.background || '#f8f9fa'};
  min-height: 100vh;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  .stat-card {
    background: ${({ theme }) => theme.dashboard?.cardBackground || '#ffffff'};
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    text-align: center;

    h3 {
      color: ${({ theme }) => theme.dashboard?.secondaryText || '#7f8c8d'};
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    p {
      color: ${({ theme }) => theme.dashboard?.primaryText || '#2c3e50'};
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.div`
  background: ${({ theme }) => theme.dashboard?.sidebarBackground || '#ffffff'};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);

  button {
    display: block;
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 5px;

    &:hover {
      background: ${({ theme }) => theme.dashboard?.hoverBackground || '#ecf0f1'};
    }

    &.active {
      background: ${({ theme }) => theme.dashboard?.activeBackground || '#3498db'};
      color: white;
    }
  }
`;

export const MainContent = styled.div`
  background: ${({ theme }) => theme.dashboard?.contentBackground || '#ffffff'};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.dashboard?.primaryText || '#2c3e50'};
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.dashboard?.accent || '#e74c3c'};
`;