import { Action } from "redux";

export const INCREMENT = "[Counter] Increment";
export const DECREMENT = "[Counter] Decrement";
export const RESET = "[Counter] Reset";

class Increment implements Action {
  readonly type = INCREMENT;
}

class Decrement implements Action {
  readonly type = DECREMENT;
}

class Reset implements Action {
  readonly type = RESET;
}

export type All = Increment | Decrement | Reset;
