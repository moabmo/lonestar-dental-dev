import { useLayoutEffect } from 'react';

const adjustContentPosition = () => {
  const header = document.querySelector('header');
  const mainContent = document.querySelector('.main-content');

  if (header && mainContent) {
    // Adjust padding-top to match the header height
    mainContent.style.paddingTop = `${header.offsetHeight}px`;
  }
};

const AdjustContent = () => {
  useLayoutEffect(() => {
    adjustContentPosition();

    const handleResize = () => {
      adjustContentPosition();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null; // This component doesn’t render anything
};

export default AdjustContent;
