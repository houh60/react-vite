import React, { useState } from 'react';
import TabButton from '../TabButton/TabButton';
import { EXAMPLES } from '../../data';

const buttonNames = ['components', 'jsx', 'props', 'state'];

export default function Examples() {
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
  );
}
