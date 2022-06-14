import React from 'react';

import NextLaunch from '../components/_NextLaunch';
import TabNavigator from '../components/TabNavigator';
import UpcomingLaunches from '../components/_UpcomingLaunches';
import LatestLaunches from '../components/_LatestLaunch';
import PastLaunch from '../components/_PastLaunches';

import bootstrapAnalytics from './analytics';
import './index.css';

function App() {

  bootstrapAnalytics();

  const routes = [
    {slug: 'next', label: 'Up Next', content: <NextLaunch />},
    {slug: 'upcoming', label: 'Next Launches', content: <UpcomingLaunches />},
    {slug: 'latest', label: 'Latest Launches', content: <LatestLaunches />},
    {slug: 'past', label: 'Past Launch', content: <PastLaunch />},
  ];

  return (
    <div className="app-container">
      <TabNavigator routes={routes} />
    </div>
  );
}

export default App;