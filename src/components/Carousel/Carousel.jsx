// components/Carousel/Carousel.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CarouselContainer, Slide, NavDots, ArrowButton } from './Carousel.styled';

const Carousel = ({ items, autoPlay = true, interval = 5000, theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length]);

  return (
    <CarouselContainer theme={theme}>
      <AnimatePresence initial={false}>
        <Slide
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundImage: `url(${items[activeIndex].image})` }}
        >
          <div className="content">
            <h2>{items[activeIndex].title}</h2>
            <p>{items[activeIndex].subtitle}</p>
            <button className="cta-button">
              {items[activeIndex].ctaText}
            </button>
          </div>
        </Slide>
      </AnimatePresence>

      <ArrowButton
        direction="left"
        onClick={() => 
          setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
        }
        theme={theme}
      >
        &lt;
      </ArrowButton>

      <ArrowButton
        direction="right"
        onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)}
        theme={theme}
      >
        &gt;
      </ArrowButton>

      <NavDots>
        {items.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
            theme={theme}
          />
        ))}
      </NavDots>
    </CarouselContainer>
  );
};

export default Carousel;