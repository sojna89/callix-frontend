import { useState } from 'react';
import './index.css';

const CSS_ACTIVE_CLASS = 'active';

function TabNavigator({routes}: any) {
  const initialTab = routes[0];
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabNavProps = {
    routes,
    activeTab,
    setActiveTab
  };

  const tabContentProps ={
    routes,
    slug: activeTab.slug
  }

  return (
    <div className="container">
      <TabNav {...tabNavProps} />
      <TabContent {...tabContentProps} />
    </div>
  )
}

export default TabNavigator;

function TabNavItem({label, slug, activeTab, setActiveTab}: any) {
  const activeClass = activeTab.slug === slug? CSS_ACTIVE_CLASS : null;
  const onClick = () => setActiveTab({slug});

  return (
    <button
      className={`tab-button ${activeClass}`}
      onClick={onClick}>
      {label}
    </button>
  )
}

function TabNav({routes, activeTab, setActiveTab}: any) {

  return(
    <nav>
      <div>
        {routes.map((route: any) => {
          let tabProps = {
            activeTab,
            setActiveTab,
            ...route
          }

          return(
            <TabNavItem key={route.slug} {...tabProps} />
          )
        })}
      </div>
    </nav>
  )
}

function TabContent({routes, slug}: any) {

  const getCurrentContentBySlug = (slug: string) => {
    const [route] = routes.filter((route: any) => route.slug === slug);
    return route.content;
  };

  return (
    <div className='tab-content'>
      {getCurrentContentBySlug(slug)}
    </div>
  )
}