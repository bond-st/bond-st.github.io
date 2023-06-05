import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';

document.addEventListener('DOMContentLoaded', () => {
    render(
      <App />,
      document.getElementById('root')
    )
  })