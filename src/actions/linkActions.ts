import { Condition, UrlList } from "../helpers/interfaces";
import {
  ADD_URL_LIST,
  REMOVE_LIST,
  RESET_STATE,
  SET_CONDITION_LIST,
  SET_SELECTED_CONDITION,
  TOGGLE_SAVED,
  UPDATE_LISTS,
} from "../helpers/types";

export const setConnectionList = (newList: Condition[]) => {
  return {
    type: SET_CONDITION_LIST,
    payload: newList,
  };
};

export const addUrlList = (urlList: UrlList) => {
  return {
    type: ADD_URL_LIST,
    payload: urlList,
  };
};

//if list already exists, add to it
//if not, create new list
export const addUrlToList = (
  urlLists: UrlList[],
  selectedCondition: Condition,
  selectedListIndex: number,
  url: string
) => {
  let newLists = JSON.parse(JSON.stringify(urlLists));
  if (selectedListIndex === -1) {
    return {
      type: ADD_URL_LIST,
      payload: { condition: selectedCondition, urls: [url] },
    };
  }
  newLists[selectedListIndex].urls.push(url);
  return {
    type: UPDATE_LISTS,
    payload: newLists,
  };
};

//if removing doesn't empty list, remove from list
//if so, remove entire list
export const removeFromList = (
  urlLists: UrlList[],
  selectedCondition: Condition,
  url: string
) => {
  const listIndex = urlLists.findIndex(
    (list) => list.condition === selectedCondition
  );
  let newLists = JSON.parse(JSON.stringify(urlLists));
  if (urlLists[listIndex].urls.length === 1) {
    return {
      type: REMOVE_LIST,
      payload: urlLists[listIndex],
    };
  }
  newLists[listIndex].urls = newLists[listIndex].urls.filter(
    (item: string) => item !== url
  );
  return {
    type: UPDATE_LISTS,
    payload: newLists,
  };
};

export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};

export const setSelectedCondition = (newState: Condition) => {
  return {
    type: SET_SELECTED_CONDITION,
    payload: newState,
  };
};

//toggle for the saved modal
export const toggleSaved = (newState: boolean) => {
  return {
    type: TOGGLE_SAVED,
    payload: newState,
  };
};
