import React from 'react';
import Accordion from './b';
// Import the Accordion component

const A = () => {
  const accordionItems = [
    {
      title: 'Accordion Item 1',
      content: 'Content for item 1 goes here.',
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for item 2 goes here.',
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for item 3 goes here.',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Accordion Example</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default A;
