import { Condition } from "./interfaces";

export const pageConditions: Condition[] = [
  { value: "EQUALS", label: "URL is" },
  { value: "NOT_EQUALS", label: "URL is not" },
  { value: "CONTAINS", label: "URL contains" },
  { value: "NOT_CONTAINS", label: "URL not contains" },
  { value: "PREFIX", label: "URL starts with" },
  { value: "SUFFIX", label: "URL ends with" },
];

export const URL_ADD = "Add";
export const MAIN_TITLE = "Block URLs";
export const URL_SAVE = "Save";
export const URL_PLACEHOLDER = "URL is";
export const FIELD_ERROR_INVALID = "URL must start with '/'";
export const FIELD_ERROR_EXISTS = "This URL already exists in this list!";
export const MODAL_TITLE = "Your block URLs are:";
export const CLOSE_MODAL = "Approve and reset values";
