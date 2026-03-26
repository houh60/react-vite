import React from 'react';
import { useState } from 'react';
import './App.css';
import { CORE_CONCEPTS } from './data';
import Logo from './components/Logo/Logo.jsx';
import CoreConcept from './components//CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { EXAMPLES } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const buttonNames = ['components', 'jsx', 'props', 'state'];

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
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu className="items">
          {buttonNames.map((btnName) => (
            <TabButton isSelected={selectedTopic === btnName} onSelect={() => handleSelect(btnName)} key={btnName}>
              {btnName === 'jsx' ? btnName.toUpperCase() : btnName.charAt(0).toUpperCase() + btnName.slice(1)}
            </TabButton>
          ))}
        </menu>
        {tabContent}
      </section>
    </>
  );
}

export default App;
