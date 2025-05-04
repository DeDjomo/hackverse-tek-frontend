import styled from 'styled-components';

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.dashboard?.borderColor || '#ecf0f1'};
  }

  th {
    background: ${({ theme }) => theme.dashboard?.headerBackground || '#f8f9fa'};
    color: ${({ theme }) => theme.dashboard?.secondaryText || '#7f8c8d'};
  }

  button {
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &.edit {
      background: #3498db;
      color: white;
    }

    &.delete {
      background: #e74c3c;
      color: white;
    }
  }
`;

export const AddProductButton = styled.button`
  background: ${({ theme }) => theme.dashboard?.accent || '#2ecc71'};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;