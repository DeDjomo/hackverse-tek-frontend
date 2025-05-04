import styled from 'styled-components';

export const AnalyticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .metrics-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .charts-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const MetricCard = styled.div`
  background: ${({ theme }) => theme.dashboard?.cardBackground || '#ffffff'};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);

  h4 {
    color: ${({ theme }) => theme.dashboard?.secondaryText || '#7f8c8d'};
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    color: ${({ theme }) => theme.dashboard?.primaryText || '#2c3e50'};
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  span {
    color: #2ecc71;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const ChartCard = styled.div`
  background: ${({ theme }) => theme.dashboard?.cardBackground || '#ffffff'};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);

  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    h3 {
      color: ${({ theme }) => theme.dashboard?.primaryText || '#2c3e50'};
    }

    select {
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid #ecf0f1;
      background: white;
    }
  }
`;

export const ChartWrapper = styled.div`
  height: 350px;
  position: relative;
`;