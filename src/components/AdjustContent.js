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

    // Ensure to adjust position on initial render in case of changes after the component mounts
    // and handle the cleanup of event listeners
    return () => {
      window.removeEventListener('resize', adjustContentPosition);
    };
  }, []); // Dependency array remains empty to only run on mount and unmount

  return null; // This component doesn't render anything visually
};

export default AdjustContent;
