import styled from "styled-components";

interface IInput{
  padding?: string;
  width?:string;
  margin?: string;
}
export const Input = styled.input<IInput>`
  padding:${props=>props.padding || '.5rem'};
  margin:${props=>props.margin || '0px'};
  width: ${props=>props.width||'auto'};
  max-width: 100%;
` 
