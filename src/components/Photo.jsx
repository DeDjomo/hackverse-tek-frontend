import React from 'react';

const Photo = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} style={{ width: 200, height: 200 }} />
  );
};

export default Photo;