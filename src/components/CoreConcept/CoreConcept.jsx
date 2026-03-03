import React from 'react';
import './CoreConcept.css';

export default function CoreConcept({ image, title, description }) {
  return (
    <li className="item">
      <img className="image" src={image} alt={title} />
      <h3 className="prop-text">{title}</h3>
      <p className="prop-text">{description}</p>
    </li>
  );
}
