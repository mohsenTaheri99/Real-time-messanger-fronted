import { styled } from "styled-components";

export const AppC = styled.div`
  width: 100vw;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.bg};
  color: ${({ theme }) => theme.color.text};
`;
