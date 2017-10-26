import { Action } from "redux";

export const INCREMENT = "[Counter] Increment";
export const DECREMENT = "[Counter] Decrement";

class Increment implements Action {
  readonly type = INCREMENT;
}

class Decrement implements Action {
  readonly type = DECREMENT;
}

export type All = Increment | Decrement;
