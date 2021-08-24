import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return (
  <button>Click me</button>
  );
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
