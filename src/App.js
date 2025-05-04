// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import { faHome, faUser, faShoppingCart, faSign } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Menu';
import ProductGrid from './components/Product/ProductGrid';
import logo from './logo.png';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Photo from './components/Photo';
import './App.css';
import { title } from 'framer-motion/client';

const App = () => {
  // Configuration du thème
  const theme = {
    // Styles pour le menu
    menuBackground: '#ff5500',
    brandText: '#ffffff',
    menuItemBackground: 'transparent',
    menuActiveBackground: '#ab7255',
    menuText: '#bdc3c7',
    menuActiveText: '#ffffff',
    
    // Styles pour les produits
    productGridBackground: '#f8f9fa',
    productCardBackground: '#ffffff',
    accentColor: '#3498db',
    buttonBackground: '#2ecc71',
    buttonHoverBackground: '#abt255',
    productImageBorder: '#ecf0f1'
  };

  // Données du menu
  const menuItems = [
    { title: 'Accueil', path: '/', icon: faHome },
    { title: 'Profil', path: '/profile', icon: faUser },
    { title: 'Panier', path: '/cart', icon: faShoppingCart },
    { title: 'Sign In', path: '/signIn', icon: faSign}
  ];

  // Données des produits
// Dans App.js
const products = [
  {
    id: 1,
    name: 'Equerre',
    price: 450,
    image:'equerre.png',
    description: '',
    isNew: true,
    category: 'Fourniture'
  },
  {
    id: 2,
    name: 'Casque de Protection',
    price: 2500,
    image:'casque.png',
    description: '',
    category: 'Génie Civil'
  },
  {
    id: 3,
    name: 'Gilet',
    price: 1500,
    image:'gilet.png',
    description: 'Protection',
    isNew: true,
    category: 'Génie Civil'
  },
  {
    id: 4,
    name: 'Calculatrice',
    price: 2000,
    image:'calculatrice.png',
    description: 'Calculatrice',
    category: 'Calcul'
  },
  {
    id: 5,
    name: 'Chaussures de Sécurité',
    price: 10500,
    image: 'chaussures-secu.png',
    description: 'Protection',
    category: 'Génie Mécanique'
  },
  {
    id: 6,
    name: 'Gilet',
    price: 2000,
    image: 'gilet-secu.png',
    description: 'Protection',
    category: 'GénieCivil'
  },
  {
    id: 7,
    name: 'Règle',
    price: 200,
    image:'regle.png',
    description: 'Dessin',
    category: 'Founitures'
  },
  {
    id: 8,
    name: 'Crayon',
    price: 100,
    image: 'crayons.png',
    description: 'Dessin',
    isNew: true,
    category: 'Fournitures'
  },
  {
    id: 9,
    name: 'Livre',
    price: 3500,
    image: 'laptop.png',
    description: 'Histoire Africaine',
    category: 'Culture'
  },
  {
    id: 10,
    name: 'Stylo',
    price: 150,
    image: 'stylo.png',
    description: 'Ecriture',
    category: 'Fourniture'
  }
];
// Données du carousel
const carouselItems = [
  {
    image: '../public/images/Carousel/tech-banner.png',
    title: 'Toutes Vos Fournitures Scolaires Disponibles',
    subtitle: 'Achetez des fournitures',
    ctaText: 'Voir maintenant'
  },
  {
    image: '../public/images/Carousel/special-offer.png',
    title: 'Transactions Sécurisées',
    subtitle: 'Traçabilité',
    ctaText: 'Profiter des offres'
  },
  {
    image: '../public/images/Carousel/image3.png',
    title: 'Les Offres De Vos Clubs A Porté De Main',
    subtitle: 'Matériel haute performance pour professionnels',
    ctaText: 'Découvrir'
  },
  {
    image: '../public/images/Carousel/image4.png',
    title: 'Satisfait ou Remboursé',
    subtitle: 'Recevez vos articles en 24h chrono',
    ctaText: 'En savoir plus'
  }
];


return (
  <Router>
    <div className="app-layout">
      
      {/* Menu en position fixe */}
      <Menu 
        items={menuItems} 
        logo={logo} 
        logoSize="128px"
        companyName="TechShop CFA" 
        theme={theme} 
      />

      {/* Contenu principal sous le menu */}
      <main className="main-content">
        
        {/* Carousel en haut */}
        <Carousel 
          items={carouselItems} 
          theme={{ 
            ...theme,
            carouselOverlay: 'rgba(0, 0, 0, 0.4)'
          }} 
        />

        {/* Grille de produits en dessous */}
        <ProductGrid 
          products={products} 
          theme={theme}
          title="Nos meilleures ventes"
        />

      </main>
      
    <Footer theme={theme} />

    </div>
  </Router>
);
};

export default App;

