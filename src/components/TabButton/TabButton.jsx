import React from 'react';
import './TabButton.css';

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li className="list-item">
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
