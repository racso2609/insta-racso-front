import styled from "styled-components";

interface IGrid {
  columns?: string;
  rows?: string;
  gap?: string;
  justify?:string;
  height?: string;
  align?:string;
  padding?:string;
}

export const Grid = styled.div<IGrid>`
  display: grid;
  ${(props) => props.columns && `grid-template-columns: ${props.columns}`};
  ${(props) => props.rows && `grid-template-rows: ${props.rows}`};
  ${(props) => props.gap && `gap: ${props.gap}`};
  ${(props) => props.justify && `justify-items: ${props.justify}`};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.padding && `padding: ${props.padding}`};

`;
