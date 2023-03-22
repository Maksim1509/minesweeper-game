export enum Mark {
  none = 'none',
  flag = 'flag',
  question = 'question',
}

export interface ICell {
  value: number;
  isHide: boolean;
  mark: Mark;
}

export interface IFieldInfo {
  size: number[];
  MINE_COUNT: number;
}
