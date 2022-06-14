import { useContext, useState } from 'react';
import { ITabContext, ITabNavigatorProps, ITabNavItemProps, Tab } from '../../App/types';
import useAnalytics from '../../hooks/useAnalytics';
import useVariant from '../../hooks/useVariant';
import TabContext from './context';
import './index.css';

const CSS_ACTIVE_CLASS = 'active';

function TabNavigator({routes}: ITabNavigatorProps) {
  const initialTab = routes[0];
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  const tabContext = {
    routes,
    activeTab,
    setActiveTab
  };

  return (
    <div className="container">
      <TabContext.Provider value={tabContext}>
        <TabNav />
        <TabContent />
      </TabContext.Provider>
    </div>
  )
}

export default TabNavigator;

function TabNav() {
  const { routes } = useContext(TabContext) as ITabContext;
  const variant = useVariant('C29UiOvoSNafWD1T_pWifg');
  
  return(
    <nav>
      <div>
        {routes.map((route: Tab) => (
          <TabNavItem key={route.slug} {...route} />
        ))}
      </div>
    </nav>
  )
}

function TabNavItem({label, slug}: ITabNavItemProps) {

  const {
    activeTab: {slug: activeSlug},
    setActiveTab
  } = useContext(TabContext) as ITabContext;
  
  const gaEventTracker = useAnalytics();

  const activeClass = activeSlug === slug? CSS_ACTIVE_CLASS : null;

  const onClick = () => {
    setActiveTab({slug});
    gaEventTracker(slug);
  }

  return (
    <button
      className={`tab-button ${activeClass}`}
      onClick={onClick}>
      {label}
    </button>
  )
}

function TabContent() {
  const {
    activeTab: {slug: activeSlug},
    routes
  } = useContext(TabContext) as ITabContext;

  const getCurrentContentBySlug = (slug: string) => {
    const [route] = routes.filter((route: Tab) => route.slug === slug);
    return route.content;
  };

  return (
    <div className='tab-content'>
      {getCurrentContentBySlug(activeSlug)}
    </div>
  )
}