export type Tab = {
  slug: string;
  label: string;
  content: any;
}

export interface ITabContext {
  activeTab: Tab;
  setActiveTab: Function;
  routes: Tab[];
}

export interface ITabNavItemProps {
  label: string;
  slug: string;
}

export interface ITabNavigatorProps {
  routes: Tab[];
}