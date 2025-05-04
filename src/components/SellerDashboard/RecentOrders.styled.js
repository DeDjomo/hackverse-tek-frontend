import styled from 'styled-components';

export const OrdersTable = styled.div`
  background: ${({ theme }) => theme.dashboard?.cardBackground || '#ffffff'};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);

  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    h3 {
      color: ${({ theme }) => theme.dashboard?.primaryText || '#2c3e50'};
    }

    span {
      color: ${({ theme }) => theme.dashboard?.secondaryText || '#7f8c8d'};
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #ecf0f1;
    }

    th {
      color: ${({ theme }) => theme.dashboard?.secondaryText || '#7f8c8d'};
      font-weight: 600;
    }

    td {
      color: ${({ theme }) => theme.dashboard?.primaryText || '#2c3e50'};
    }

    tr:hover {
      background: #f8f9fa;
    }
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  background: ${({ status }) => 
    status === 'completed' ? '#2ecc7155' :
    status === 'pending' ? '#e74c3c55' : '#3498db55'};
  color: ${({ status }) => 
    status === 'completed' ? '#2ecc71' :
    status === 'pending' ? '#e74c3c' : '#3498db'};

  svg {
    font-size: 0.8rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  button {
    padding: 0.5rem 1rem;
    border: 1px solid #ecf0f1;
    background: white;
    cursor: pointer;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: #3498db;
      color: white;
      border-color: #3498db;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  span {
    color: ${({ theme }) => theme.dashboard?.secondaryText || '#7f8c8d'};
  }
`;