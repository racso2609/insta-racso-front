import { Link } from "react-router-dom";
import styled from "styled-components";

interface IDotButton {
  dimensions?: string;
  fontSize?: string;
  onClick?: (e: Event) => void;
  background?: string;
  to?: string;
}

interface IDotContainer {
  dimensions?: string;
  fontSize?: string;
}

export const DotContainer = styled.div<IDotContainer>`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const DotButton = styled.button<IDotButton>`
  width: ${(props) => props.dimensions || "50px"};
  height: ${(props) => props.dimensions || "50px"};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${(props) => props.background || "lightgreen"};
  border: 0px;
  font-wight: bold;
  color: white;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
  margin-bottom: 10px;
`;

export const DotLink = styled(Link)<IDotButton>`
  width: ${(props) => props.dimensions || "50px"};
  height: ${(props) => props.dimensions || "50px"};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${(props) => props.background || "lightgreen"};
  border: 0px;
  font-wight: bold;
  color: white;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
  margin-bottom: 10px;
`;
