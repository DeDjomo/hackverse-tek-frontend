// pages/Home.jsx
import { Link } from 'react-router-dom';
import { 
  HomeContainer,
  SellerLinkButton,
  ContentWrapper,
  SectionTitle 
} from '../styles/Home.styled';
import Carousel from '../components/Carousel';
import ProductGrid from '../components/Product/ProductGrid';
import PropTypes from 'prop-types';

const Home = ({ products, carouselItems, theme }) => {
  return (
    <HomeContainer>
      {/* Carousel principal */}
      <Carousel items={carouselItems} theme={theme} />

      {/* Lien vers le dashboard vendeur */}
      <SellerLinkButton theme={theme}>
        <Link to="/seller-dashboard">
          Accéder à votre espace vendeur
        </Link>
      </SellerLinkButton>

      {/* Contenu principal */}
      <ContentWrapper>
        <SectionTitle theme={theme}>
          Nos Produits Phares
        </SectionTitle>
        
        <ProductGrid 
          products={products} 
          theme={theme}
        />
      </ContentWrapper>
    </HomeContainer>
  );
};

// Validation des props
Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      isNew: PropTypes.bool
    })
  ).isRequired,
  carouselItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      ctaText: PropTypes.string.isRequired
    })
  ).isRequired,
  theme: PropTypes.object.isRequired
};

export default Home;