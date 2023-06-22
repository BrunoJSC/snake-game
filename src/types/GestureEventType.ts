export interface GestureEventType {
  nativeEvent: { translationX: number; translationY: number };
}

export interface Coordinate {
  x: number;
  y: number;
}

export enum Direction {
  Right = "Right",
  Left = "Left",
  Up = "Up",
  Down = "Down",
}
