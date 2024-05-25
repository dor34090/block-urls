import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FIELD_ERROR_EXISTS,
  FIELD_ERROR_INVALID,
  URL_ADD,
} from "../helpers/consts";
import { Condition, LinkState } from "../helpers/interfaces";
import { Button, InputLayer } from "../styles/layout";
import { addUrlToList, setSelectedCondition } from "../actions/linkActions";
import { CSSProperties } from "styled-components";

const AddUrl = () => {
  const {
    state: { conditions, lists, selectedCondition },
  } = useSelector((state: { state: LinkState }) => state);

  const dispatch = useDispatch();

  const [urlValue, setUrlValue] = useState<string>("");

  //holding the type of error to display
  const [error, setError] = useState<"none" | "exists" | "invalid">("none");

  const onSelectedChange = useCallback(
    (e: SelectChangeEvent) => {
      if (error === "exists") setError("none");
      dispatch(
        setSelectedCondition(
          conditions.find((condition) => condition.value === e.target.value) ??
            conditions[0]
        )
      );
    },
    [conditions, error]
  );

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError("none");
    setUrlValue(e.target.value);
  };

  //checking if url is valid and not duplicate and adding to a list
  const submit = useCallback(() => {
    if (urlValue.charAt(0) !== "/") {
      setError("invalid");
      return;
    }
    let conditionListIndex = lists.findIndex(
      (list) => list.condition.value === selectedCondition.value
    );
    if (
      conditionListIndex >= 0 &&
      lists[conditionListIndex].urls.includes(urlValue)
    ) {
      setError("exists");
      return;
    }
    dispatch(
      addUrlToList(lists, selectedCondition, conditionListIndex, urlValue)
    );
    setUrlValue("");
  }, [selectedCondition, urlValue, lists]);

  const selectStyle: CSSProperties = {
    width: "40%",
  };

  const inputStyle: CSSProperties = {
    width: "60%",
  };

  return (
    <InputLayer>
      <Select
        id="conditions"
        value={selectedCondition.value}
        onChange={onSelectedChange}
        style={selectStyle}
        defaultValue={conditions[0].value}
        displayEmpty
      >
        {conditions.map((condition: Condition, index: number) => (
          <MenuItem key={index} value={condition.value}>
            {condition.label}
          </MenuItem>
        ))}
      </Select>
      <TextField
        id="url"
        placeholder={"e.g /index.php"}
        style={inputStyle}
        value={urlValue}
        onChange={onValueChange}
        variant="outlined"
        error={error !== "none"}
        helperText={
          error !== "none"
            ? error === "invalid"
              ? FIELD_ERROR_INVALID
              : FIELD_ERROR_EXISTS
            : ""
        }
      />
      <Button onClick={submit}>{URL_ADD}</Button>
    </InputLayer>
  );
};

export default AddUrl;
