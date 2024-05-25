import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState, toggleSaved } from "../actions/linkActions";
import {
  CLOSE_MODAL,
  MAIN_TITLE,
  MODAL_TITLE,
  URL_ADD,
  URL_PLACEHOLDER,
} from "../helpers/consts";
import {
  Condition,
  LinkState,
  MainPageProps,
  UrlList,
} from "../helpers/interfaces";
import {
  FormWrapper,
  MainElem,
  MainTitle,
  Container,
  Overlay,
  Modal,
  ModalEntry,
  Button,
  ModalTitle,
  ModalMain,
} from "../styles/layout";
import AddUrl from "./AddUrl";
import UrlListBlocks from "./UrlBlock";

const MainLayout = () => {
  const {
    state: { saved, lists },
  } = useSelector((state: { state: LinkState }) => state);

  const dispatch = useDispatch();

  return (
    <MainElem>
      <Container>
        <MainTitle>{MAIN_TITLE}</MainTitle>
        <FormWrapper>
          <AddUrl />
          <UrlListBlocks />
        </FormWrapper>
        {saved && (
          <Overlay>
            <Modal>
              <ModalTitle>{MODAL_TITLE}</ModalTitle>
              <ModalMain>
                {lists.map((list: UrlList, index: number) => (
                  <ModalEntry key={`${list.condition.value}-${index}`}>
                    {list.condition.value}:
                    {JSON.stringify(
                      list.urls.map((url) => {
                        return { text: url };
                      })
                    )}
                  </ModalEntry>
                ))}
              </ModalMain>
              <Button
                onClick={() => {
                  dispatch(resetState());
                }}
              >
                {CLOSE_MODAL}
              </Button>
            </Modal>
          </Overlay>
        )}
      </Container>
    </MainElem>
  );
};

export default MainLayout;
