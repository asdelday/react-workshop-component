import React from 'react';
import { render } from 'react-dom';
import ReactWorkshopComponent from './ReactWorkshopComponent';

(() => {
  const app = document.getElementById('react-view');
  render(<ReactWorkshopComponent title="React Workshop" />, app);
})();
