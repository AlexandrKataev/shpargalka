export enum LangItems {
  JS = 'JS',
  JS_BROUSER = 'JS Browser',
  HTML = 'HTML',
  CSS = 'CSS',
  REACT = 'React',
  TS = 'TS',
  GIT = 'Git',
  VS_CODE = 'VS Code',
}

export interface LangState {
  langItems: LangItems[];
  activeLang: LangItems;
}
