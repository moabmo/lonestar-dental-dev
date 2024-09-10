// AdjustContent.js
import { useLayoutEffect } from 'react';

const adjustContentPosition = () => {
  const header = document.querySelector('header');
  const mainContent = document.querySelector('.main-content');

  if (header && mainContent) {
    // Set the padding-top to the header's height
    mainContent.style.paddingTop = `${header.offsetHeight}px`;
  }
};

const AdjustContent = () => {
  useLayoutEffect(() => {
    // Adjust position immediately on component load
    adjustContentPosition();

    // Adjust position on window resize
    window.addEventListener('resize', adjustContentPosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', adjustContentPosition);
    };
  }, []);

  return null; // This component doesn't render anything visually
};

export default AdjustContent;
