import { useState } from 'react';
import { OrdersTable, StatusBadge, Pagination } from './RecentOrders.styled';
import { faBoxOpen, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecentOrders = ({ theme }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  // Données simulées
  const orders = [
    { id: 1, customer: 'Jean Dupont', product: 'Arduino Kit', amount: 45000, status: 'pending', date: '2023-03-15' },
    { id: 2, customer: 'Marie Ngo', product: 'Raspberry Pi 4', amount: 75000, status: 'completed', date: '2023-03-14' },
    // Ajouter plus de commandes...
  ];

  // Pagination
  const indexOfLast = currentPage * ordersPerPage;
  const indexOfFirst = indexOfLast - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirst, indexOfLast);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <FontAwesomeIcon icon={faClock} />;
      case 'processing': return <FontAwesomeIcon icon={faBoxOpen} />;
      case 'completed': return <FontAwesomeIcon icon={faCheckCircle} />;
      default: return null;
    }
  };

  return (
    <OrdersTable theme={theme}>
      <div className="table-header">
        <h3>Commandes récentes</h3>
        <span>Affichage {indexOfFirst + 1}-{indexOfLast} sur {orders.length}</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Commande</th>
            <th>Client</th>
            <th>Produit</th>
            <th>Montant</th>
            <th>Statut</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map(order => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.amount.toLocaleString()} FCFA</td>
              <td>
                <StatusBadge status={order.status}>
                  {getStatusIcon(order.status)}
                  {order.status === 'pending' ? 'En attente' : 
                   order.status === 'completed' ? 'Complétée' : 'En traitement'}
                </StatusBadge>
              </td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination>
        <button 
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span>Page {currentPage}</span>
        <button 
          onClick={() => setCurrentPage(p => p + 1)}
          disabled={indexOfLast >= orders.length}
        >
          Suivant
        </button>
      </Pagination>
    </OrdersTable>
  );
};

export default RecentOrders;