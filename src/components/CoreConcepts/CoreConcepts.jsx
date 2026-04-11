import React from 'react';
import { CORE_CONCEPTS } from '../../data';
import CoreConcept from '../CoreConcept/CoreConcept';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul className="items">
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
