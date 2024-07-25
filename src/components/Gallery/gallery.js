import React, { useState } from 'react';
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
  { src: gallery1, alt: 'gallery', desc: 'Height:100*100   ' },
  { src: gallery2, alt: 'gallery', desc: 'Description of image 2' },
  { src: gallery3, alt: 'gallery', desc: 'Description of image 3' },
  { src: gallery4, alt: 'gallery', desc: 'Description of image 4' },
  { src: gallery5, alt: 'gallery', desc: 'Description of image 5' },
  { src: gallery6, alt: 'gallery', desc: 'Description of image 6' },
  { src: gallery7, alt: 'gallery', desc: 'Description of image 7' },
  { src: gallery8, alt: 'gallery', desc: 'Description of image 8' },
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <section id='gallery'>
      <h2 className="galleryTitle">My Gallery</h2>
      <span className="galleryDesc">
        During the Middle Ages the word artist already existed in some countries such as Italy, but the meaning was something resembling craftsman, while the word artisan was still unknown.
      </span>

      <div className="galleryImgs">
        {images.slice(0, showAll ? images.length : 4).map((image, index) => (
          <div
            key={index}
            className="galleryItem"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={image.src} alt={image.alt} className="galleryImg" />
            {hoveredIndex === index && (
              <div className="imageOverlay">
                <p>{image.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!showAll && (
        <button className="galleryBtn" onClick={handleClick}>
          See More
        </button>
      )}
    </section>
  );
};

export default Gallery;
