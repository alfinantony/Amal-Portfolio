import React from 'react';
import './exhibition.css';
import exhibition1 from '../../assets/exhibition1.jpg';
import exhibition2 from '../../assets/exhibition2.jpg';
import exhibition3 from '../../assets/exhibition3.jpg';
import exhibition4 from '../../assets/exhibition4.jpg';
import exhibition5 from '../../assets/exhibition5.jpg';
import exhibition6 from '../../assets/exhibition6.jpg';
import exhibition7 from '../../assets/exhibition7.jpg';

const Exhibition = () => {
  return (
    React.createElement(
      'section',
      { id: 'exhibition' },
      React.createElement(
        'h2',
        { className: 'exhibitionTitle' },
        'Exhibition'
      ),
      React.createElement(
        'span',
        { className: 'exhibitionDesc' },
        'During the Middle Ages the word artist already existed in some countries such as Italy, but the meaning was something resembling craftsman, while the word artisan was still unknown.'
      ),
      React.createElement(
        'div',
        { className: 'exhibitionImgs' },
        React.createElement('img', {
          src: exhibition1,
          alt: 'gallery',
          className: 'exhibitionImg',
        }),
        React.createElement('img', {
          src: exhibition2,
          alt: 'gallery',
          className: 'exhibitionImg',
        }),
        React.createElement('img', {
          src: exhibition3,
          alt: 'gallery',
          className: 'exhibitionImg',
        }),
        React.createElement('img', {
          src: exhibition4,
          alt: 'gallery',
          className: 'exhibitionImg',
        }),
        React.createElement('img', {
          src: exhibition5,
          alt: 'gallery',
          className: 'exhibitionImg',
        }),
        React.createElement('img', {
          src: exhibition6,
          alt: 'gallery',
          className: 'exhibitionImg',
        }),
        React.createElement('img', {
          src: exhibition7,
          alt: 'gallery',
          className: 'exhibitionImg',
        })
      )
    )
  );
};

export default Exhibition;
