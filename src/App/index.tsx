import React from 'react';

import TabNavigator from '../components/TabNavigator';
import './index.css';

const CompFuncA = () => {
  return (<>Comp A</>);
}

function App() {

  const routes = [
    {slug: 'next', label: 'Up Next', content: <CompFuncA />},
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
