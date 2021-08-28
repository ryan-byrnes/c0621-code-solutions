import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion.jsx';

const items = [
  {
    id: 1,
    heading: 'Hypertext Markup Language',
    body: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web apps'
  },
  {
    id: 2,
    heading: 'Cascading Style Sheets',
    body: 'Cascading Style SHeets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.'
  },
  {
    id: 3,
    heading: 'JavaScript',
    body: 'JavaScript, often abbreviated as JS, is a high-level interpreted programming language that conforms to the ECMAScript specs.'
  }
];

ReactDOM.render(
  <Accordion list={items} />,
  document.querySelector('#root')
);
