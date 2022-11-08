export type ItemType = {
  title: string;
  descr: string;
  lang: string;
  theme: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface DataState {
  items: ItemType[];
  status: Status;
}
