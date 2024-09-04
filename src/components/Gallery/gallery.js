import React, { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import './gallery.css';
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import gallery6 from '../../assets/gallery6.jpg';
import gallery7 from '../../assets/gallery7.jpg';
import gallery8 from '../../assets/gallery8.jpg';

const images = [
    { 
      src: gallery1, 
      alt: 'Gallery Image 1', 
      desc: `Image` 
    },
    { 
      src: gallery2, 
      alt: 'Gallery Image 2', 
      desc: `Image` 
    },
    { 
      src: gallery3, 
      alt: 'Gallery Image 3', 
      desc: `Image` 
    },
    { 
      src: gallery4, 
      alt: 'Gallery Image 4', 
      desc: `Image`
    },
    { 
      src: gallery5, 
      alt: 'Gallery Image 5', 
      desc: `Image` 
    },
    { 
      src: gallery6, 
      alt: 'Gallery Image 6', 
      desc: `Image`
    },
    { 
      src: gallery7, 
      alt: 'Gallery Image 7', 
      desc: `Image` 
    },
    { 
      src: gallery8, 
      alt: 'Gallery Image 8', 
      desc: 'An innovative approach to modern electrical solutions.' 
    },
  ];

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSeeMoreClick = () => {
    setShowAll(true);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    React.createElement('section', { id: 'gallery' },
      React.createElement('div', { className: 'galleryHeader' },
        React.createElement('h2', { className: 'galleryTitle' }, 'Projects'),
        React.createElement('p', { className: 'galleryDesc' }, 
          'Discover the scope and scale of our engineering expertise through these featured projects.'
        )
      ),
      React.createElement('div', { className: 'galleryGrid' },
        images.slice(0, showAll ? images.length : 3).map((image, index) => (
          React.createElement('div', {
            key: index,
            className: 'galleryItem',
            onClick: () => handleImageClick(image)
          },
          React.createElement('img', {
            src: image.src,
            alt: image.alt,
            className: 'galleryImg'
          })
        )) 
      )),
      !showAll && React.createElement('button', {
        className: 'galleryBtn',
        onClick: handleSeeMoreClick
      }, 'See More'),
      selectedImage && React.createElement('div', {
        className: 'popupOverlay',
        onClick: closePopup
      },
      React.createElement('div', {
        className: 'popupContent',
        onClick: (e) => e.stopPropagation()
      },
      React.createElement(FaXmark, {
        className: 'popupClose',
        onClick: closePopup
      }),
      React.createElement('img', {
        src: selectedImage.src,
        alt: selectedImage.alt,
        className: 'popupImg'
      }),
      React.createElement('p', {
        className: 'popupDesc'
      }, selectedImage.desc)
      )
      )
    )
  );
}

export default Gallery;
