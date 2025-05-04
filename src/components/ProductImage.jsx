import React from 'react';

const ProductImage = ({ src, alt }) => {
  return (
    <img src={`/images/Products/${src}`} alt={alt} style={{ width: 200, height: 200 }} />
  );
};

export default ProductImage;