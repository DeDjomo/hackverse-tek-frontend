// components/Carousel/CarouselImage.jsx
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CarouselImage = memo(({ src, alt }) => (
  <img
    src={`images/Carousel/${src}`}
    alt={alt}
    loading="lazy"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0
    }}
  />
));

CarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default CarouselImage;