import styled from "styled-components";

interface IButton {
  width?: string;
  height?: string;
  background?: string;
  fontSize?: string;
  onClick?:(e:Event)=>void
  to?:any
}

export const Button = styled.button<IButton>`
  width: ${(props) => props.width || "40px"};
  height: ${(props) => props.height || "30px"};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background || "lightgreen"};
  border: 0px;
  font-wight: bold;
  color: ${props=> props.color||'white'};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
  margin-bottom: 10px;
`;
