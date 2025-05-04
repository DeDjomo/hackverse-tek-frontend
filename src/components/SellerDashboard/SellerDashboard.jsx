// components/SellerDashboard/SellerDashboard.jsx
import { useState, useEffect } from 'react';
import { 
  DashboardContainer,
  StatsGrid,
  SectionTitle,
  ContentContainer,
  Sidebar,
  MainContent
} from './SellerDashboard.styled';
import ProductManagement from './ProductManagement';
import SalesAnalytics from './SalesAnalytics';
import RecentOrders from './RecentOrders';

const SellerDashboard = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('products');
  const [stats, setStats] = useState({
    totalSales: 0,
    pendingOrders: 0,
    availableProducts: 0,
    totalRevenue: 0
  });

  // Simulation de données
  useEffect(() => {
    // Ici vous ferez un appel API réel
    const fetchStats = async () => {
      const mockData = {
        totalSales: 142,
        pendingOrders: 23,
        availableProducts: 89,
        totalRevenue: 5243000
      };
      setStats(mockData);
    };
    
    fetchStats();
  }, []);

  return (
    <DashboardContainer theme={theme}>
      <StatsGrid theme={theme}>
        <div className="stat-card">
          <h3>Ventes totales</h3>
          <p>{stats.totalSales}</p>
        </div>
        <div className="stat-card">
          <h3>Commandes en attente</h3>
          <p>{stats.pendingOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Produits disponibles</h3>
          <p>{stats.availableProducts}</p>
        </div>
        <div className="stat-card">
          <h3>Revenu total</h3>
          <p>{stats.totalRevenue.toLocaleString()} FCFA</p>
        </div>
      </StatsGrid>

      <ContentContainer>
        <Sidebar theme={theme}>
          <button 
            className={activeTab === 'products' ? 'active' : ''} 
            onClick={() => setActiveTab('products')}
          >
            Gestion des produits
          </button>
          <button 
            className={activeTab === 'analytics' ? 'active' : ''} 
            onClick={() => setActiveTab('analytics')}
          >
            Analyse des ventes
          </button>
          <button 
            className={activeTab === 'orders' ? 'active' : ''} 
            onClick={() => setActiveTab('orders')}
          >
            Commandes récentes
          </button>
        </Sidebar>

        <MainContent>
          <SectionTitle theme={theme}>
            {activeTab === 'products' && 'Mes Produits'}
            {activeTab === 'analytics' && 'Analytique des Ventes'}
            {activeTab === 'orders' && 'Commandes Récentes'}
          </SectionTitle>

          {activeTab === 'products' && <ProductManagement theme={theme} />}
          {activeTab === 'analytics' && <SalesAnalytics theme={theme} />}
          {activeTab === 'orders' && <RecentOrders theme={theme} />}
        </MainContent>
      </ContentContainer>
    </DashboardContainer>
  );
};

export default SellerDashboard;