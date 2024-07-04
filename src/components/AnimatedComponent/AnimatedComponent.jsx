// src/Components/AnimatedComponent/AnimatedComponent.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ animationClass, children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    return (
      <div ref={ref} className={inView ? animationClass : ''}>
        {children}
      </div>
    );
};

export default AnimatedComponent;