// components/Product/ProductGrid.jsx
import { ProductGridContainer, Grid } from './Product.styled';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, theme }) => {
  return (
    <ProductGridContainer theme={theme}>
      <Grid>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            theme={theme}
          />
        ))}
      </Grid>
    </ProductGridContainer>
  );
};

export default ProductGrid;