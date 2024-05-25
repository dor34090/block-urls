export interface Condition {
  value: string;
  label: string;
}

export interface UrlList {
  condition: Condition;
  urls: string[];
}

export interface MainPageProps {
  conditions: Condition[];
}

export interface LinkState {
  conditions: Condition[];
  selectedCondition: Condition;
  lists: UrlList[];
  saved: boolean;
}
