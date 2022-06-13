export interface ILaunch {
  id: string;
  flight_number: number;
  name: string;
  date_unix: number;
  date_utc: string;
  date_precision: any;
  rocket: any;
  payloads: string[];
  launchpad: any;
  success: boolean;
  details: string | null;
  upcoming: boolean;
  cores: any;
  fairings: any;
  crew: string[];
}

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