// components/Carousel/Carousel.styled.js
import styled from 'styled-components';
import { motion } from 'framer-motion';
export const CarouselContainer = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.carouselOverlay || 'rgba(0,0,0,0.4)'};
  background-blend-mode: multiply;

  .content {
    max-width: 1200px;
    margin: 0 auto;
    color: ${({ theme }) => theme.carouselText || '#ffffff'};
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);

    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      max-width: 600px;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }

    .cta-button {
      background: ${({ theme }) => theme.carouselCtaBackground || '#e74c3c'};
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }
    }
  }
`;

export const NavDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;

  button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.carouselDot || 'rgba(255,255,255,0.5)'};
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background: ${({ theme }) => theme.carouselDotActive || '#e74c3c'};
      transform: scale(1.2);
    }
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.carouselArrowBg || 'rgba(0,0,0,0.3)'};
  color: ${({ theme }) => theme.carouselArrow || '#ffffff'};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.carouselArrowHover || 'rgba(0,0,0,0.6)'};
  }

  &[direction="left"] {
    left: 20px;
  }

  &[direction="right"] {
    right: 20px;
  }
`;