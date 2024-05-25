import { combineReducers } from "@reduxjs/toolkit";
import { pageConditions } from "../helpers/consts";
import { Condition, LinkState, UrlList } from "../helpers/interfaces";
import {
  ADD_URL_LIST,
  UPDATE_LISTS,
  REMOVE_LIST,
  SET_CONDITION_LIST,
  TOGGLE_SAVED,
  RESET_STATE,
  SET_SELECTED_CONDITION,
} from "../helpers/types";

const initialState: LinkState = {
  conditions: pageConditions,
  selectedCondition: pageConditions[0],
  lists: [],
  saved: false,
};

type Action =
  | { type: typeof SET_CONDITION_LIST; payload: Condition[] }
  | { type: typeof ADD_URL_LIST; payload: UrlList }
  | {
      type: typeof UPDATE_LISTS;
      payload: UrlList[];
    }
  | { type: typeof REMOVE_LIST; payload: UrlList }
  | { type: typeof TOGGLE_SAVED; payload: boolean }
  | { type: typeof SET_SELECTED_CONDITION; payload: Condition }
  | { type: typeof RESET_STATE };

const linkReducer = (state: LinkState = initialState, action: Action) => {
  switch (action.type) {
    case SET_CONDITION_LIST:
      return { ...state, conditions: action.payload };
    case ADD_URL_LIST:
      return { ...state, lists: [action.payload, ...state.lists] };
    case UPDATE_LISTS:
      return { ...state, lists: action.payload };
    case REMOVE_LIST:
      return {
        ...state,
        lists: state.lists.filter(
          (list) => list.condition.value !== action.payload.condition.value
        ),
      };
    case TOGGLE_SAVED:
      return { ...state, saved: action.payload };
    case SET_SELECTED_CONDITION:
      return { ...state, selectedCondition: action.payload };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  state: linkReducer,
});

export default rootReducer;
