import React from 'react';
import { useState } from 'react';
import './App.css';
import { CORE_CONCEPTS } from './data';
import Logo from './components/Logo/Logo.jsx';
import CoreConcept from './components//CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { EXAMPLES } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const description = reactDescriptions[genRandomInt(2)];

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  const topic = EXAMPLES[selectedTopic];
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{topic.title}</h3>
        <p>{topic.description}</p>
        <pre>
          <code>{topic.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Logo />
      <h1>{description} Vite + React</h1>
      <section id="core-concepts">
        <ul className="items">
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu className="items">
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
            Components
          </TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
            JSX
          </TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
            Props
          </TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </>
  );
}

export default App;
