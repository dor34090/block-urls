import { useDispatch, useSelector } from "react-redux";
import { LinkState, UrlList } from "../helpers/interfaces";
import {
  Button,
  UrlBlock,
  UrlBlocksContainer,
  UrlBlockTitle,
  UrlBlockWrapper,
  UrlItem,
} from "../styles/layout";
import { IoCloseOutline } from "react-icons/io5";
import { CSSProperties } from "styled-components";
import { removeFromList, toggleSaved } from "../actions/linkActions";
import { URL_SAVE } from "../helpers/consts";
import { useMemo } from "react";

const UrlListBlocks = () => {
  const {
    state: { lists, selectedCondition },
  } = useSelector((state: { state: LinkState }) => state);

  const dispatch = useDispatch();

  //if the list is empty, show the list of the current condition
  const selectedConditionListIndex = useMemo(
    () =>
      lists.findIndex(
        (urlList) => urlList.condition.value === selectedCondition.value
      ) === -1,
    [selectedCondition, lists]
  );

  const cursorPointer: CSSProperties = {
    cursor: "pointer",
  };

  const alignButton: CSSProperties = {
    alignSelf: "end",
  };

  return (
    <UrlBlocksContainer>
      {selectedConditionListIndex && (
        <UrlBlockWrapper key={-1}>
          <UrlBlockTitle>{selectedCondition.label}</UrlBlockTitle>
          <UrlBlock></UrlBlock>
        </UrlBlockWrapper>
      )}
      {/* rendering the blocks of each list */}
      {lists.map((urlList: UrlList, index: number) => {
        let listUrls = urlList.urls;
        return (
          <UrlBlockWrapper key={`${index} - ${urlList.condition.label}`}>
            <UrlBlockTitle>{urlList.condition.label}</UrlBlockTitle>
            <UrlBlock>
              {listUrls.map((url: string) => (
                <UrlItem key={`${index} - ${url}`}>
                  {url}
                  <IoCloseOutline
                    style={cursorPointer}
                    onClick={() => {
                      dispatch(removeFromList(lists, urlList.condition, url));
                    }}
                  />
                </UrlItem>
              ))}
            </UrlBlock>
          </UrlBlockWrapper>
        );
      })}
      {!!lists.length && (
        <Button style={alignButton} onClick={() => dispatch(toggleSaved(true))}>
          {URL_SAVE}
        </Button>
      )}
    </UrlBlocksContainer>
  );
};

export default UrlListBlocks;
