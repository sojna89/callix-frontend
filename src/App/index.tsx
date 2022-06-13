import React from 'react';
import NextLaunch from '../components/_NextLaunch';

import TabNavigator from '../components/TabNavigator';
import './index.css';

function App() {

  const routes = [
    {slug: 'next', label: 'Up Next', content: <NextLaunch />},
    {slug: 'upcoming', label: 'Next Launches', content: 'b'},
    {slug: 'latest', label: 'Latest Launches', content: 'c'},
    {slug: 'past', label: 'Past Launch', content: 'd'},
  ];

  return (
    <div className="app-container">
      <TabNavigator routes={routes} />
    </div>
  );
}

export default App;