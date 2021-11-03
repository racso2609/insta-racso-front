import styled from "styled-components";

interface IContainerPage {
  display?: string;
  padding?: string;
  fontSize?: string;
  justify?: string;
  aling?: string;
  flexDirection?: string;
}
export const ContainerPage = styled.div<IContainerPage>`
  min-height: 100vh;
  width: 100%;
  display: ${(props) => props?.display || "inline-block"};
  padding: ${(props) => props.padding || 0};
  font-size: ${(props) => props.fontSize || "16px"};

  ${(props) =>
    props.display === "flex" &&
    `
  justify-content: ${props.justify || "flex-start"};
  align-items: ${props.aling || "flex-start"};
  flex-direction: ${props.flexDirection||'row'};
  `};
`;
