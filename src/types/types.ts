export interface ICell {
  value: number;
  isHide: boolean;
  mark: 'flag' | 'question' | '';
}

export interface IFieldInfo {
  size: number[];
  MINE_COUNT: number;
}
