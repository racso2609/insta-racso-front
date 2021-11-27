import styled from "styled-components";

export interface IImageContainer {
  height?: string;
  width?: string;
  radius?: string;
}

export const ImageContainer = styled.div<IImageContainer>`
  height: ${(props) => props.height || "30px"};
  width: ${(props) => props.width || "30px"};
  border-radius: ${(props) => props.radius || "100%"};
  overflow: hidden;
`;
export const ImageComponent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
