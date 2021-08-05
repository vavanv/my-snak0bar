
export enum HomeActions {
  INCREMENT = '@@demo/INCREMENT_COUNT',
  DECREMENT = '@@demo/DECREMENT_COUNT',
  INCREMENT_SAGA = '@@demo/INCREMENT_SAGA',
  DECREMENT_SAGA = '@@demo/DECREMENT_SAGA',
}

export type HomeState = {
  readonly count: number;
};