// components/Product/ProductCard.jsx
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { 
  CardContainer,

  ProductInfo,
  Price,
  AddButton,
  Badge
} from './Product.styled';

import ProductImage from '../ProductImage';

const ProductCard = ({ product, theme }) => {
  const navigate = useNavigate();
  // Formatage du prix
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };
  return (
    <CardContainer 
      theme={theme}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {product.isNew && <Badge theme={theme}>Nouveau</Badge>}
      
      <ProductImage src={product.image} alt={product.name} />
      
      <ProductInfo theme={theme}>
        <h3>{product.name}</h3>
                <Price theme={theme}>
          {formatPrice(product.price)}
        </Price>
        <AddButton 
          theme={theme}
          onClick={(e) => {
            e.stopPropagation();
            // Ajouter au panier
          }}
        >
          <FontAwesomeIcon icon={faCartPlus} />
          Ajouter
        </AddButton>
      </ProductInfo>
    </CardContainer>
  );
};

export default ProductCard;