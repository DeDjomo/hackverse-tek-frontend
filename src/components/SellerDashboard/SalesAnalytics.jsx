import { useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { AnalyticsContainer, ChartCard, MetricCard, ChartWrapper } from './SalesAnalytics.styled';

// Enregistrer les composants Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const SalesAnalytics = ({ theme }) => {
  const [timeRange, setTimeRange] = useState('month');
  
  // Données simulées
  const salesData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [{
      label: 'Ventes mensuelles',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: theme.dashboard?.accent || '#e74c3c',
      tension: 0.1
    }]
  };

//   const revenueByCategory = {
//     labels: ['Électronique', 'Logiciels', 'Composants', 'Accessoires'],
//     datasets: [{
//       data: [45, 30, 15, 10],
//       backgroundColor: [
//         '#e74c3c',
//         '#3498db',
//         '#2ecc71',
//         '#f1c40f'
//       ]
//     }]
//   };

  return (
    <AnalyticsContainer>
      <div className="metrics-row">
        <MetricCard theme={theme}>
          <h4>Ventes totales</h4>
          <p>142</p>
          <span>+12% vs mois dernier</span>
        </MetricCard>
        
        <MetricCard theme={theme}>
          <h4>Revenu total</h4>
          <p>5 243 000 FCFA</p>
          <span>+8% vs mois dernier</span>
        </MetricCard>
        
        <MetricCard theme={theme}>
          <h4>Panier moyen</h4>
          <p>36 920 FCFA</p>
          <span>+2.4% vs mois dernier</span>
        </MetricCard>
      </div>

      <div className="charts-grid">
        <ChartCard theme={theme}>
          <div className="chart-header">
            <h3>Tendance des ventes</h3>
            <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
              <option value="month">Mois</option>
              <option value="week">Semaine</option>
              <option value="year">Année</option>
            </select>
          </div>
          <ChartWrapper>
            <Line data={salesData} options={{ responsive: true }} />
          </ChartWrapper>
        </ChartCard>

        <ChartCard theme={theme}>
          <h3>Répartition par catégorie</h3>
          <ChartWrapper>
            {/* // <Pie data={revenueByCategory} /> */}
          </ChartWrapper>
        </ChartCard>
      </div>
    </AnalyticsContainer>
  );
};

export default SalesAnalytics;