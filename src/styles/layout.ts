import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const MainElem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  padding: 150px 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 0 100px;
`;

export const MainTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  flex: 0.3;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  flex: 0.7;
`;

export const InputLayer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 80px;
`;

export const Button = styled.div`
  background: #336699;
  border-radius: 28px;
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  min-width: 100px;
  font-weight: 600;
  cursor: pointer;
  padding: 0 8px;
`;

export const UrlBlocksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const UrlBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UrlBlockTitle = styled.div`
  font-size: 16px;
  color: #000;
  flex: 0.1;
`;

export const UrlBlock = styled.div`
  border: 1px solid #858585;
  min-height: 160px;
  flex: 0.9;
  display: flex;
  gap: 8px;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-radius: 4px;
`;

export const UrlItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  font-size: 12px;
  background: #f4f4f4;
  opacity: 0;
  animation: 0.5s ${fadeIn} forwards;
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  min-height: 400px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: 16px;
  background: #fff;
  padding: 24px;
  opacity: 0;
  animation: 0.5s ${fadeIn} forwards;
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const ModalMain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalEntry = styled.div``;
