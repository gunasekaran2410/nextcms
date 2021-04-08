import React, { useState, useCallback } from 'react';
import styles from '../pages/Index.module.css';
import ImageViewer from 'react-simple-image-viewer';



function Image() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    '.././images/footer/1.jpg',
    '.././images/footer/2.jpg',
    '.././images/footer/3.jpg',
    '.././images/footer/4.jpg',
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="80"
          height="80"
          key={ index }
          style={{ margin: '2px' }}
          alt=""/>
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          style={{ zIndex: '9999' }}
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
}

export default Image;
