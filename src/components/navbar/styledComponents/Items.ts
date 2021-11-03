import styled from "styled-components";

interface ILogo {
  maxWidth?: string;
  maxHeight?: string;
}
interface IItem {
  justify?: string;
  hChildPadding?: string;
  pRight?: string;
  hPadding?: string;
}

export const NavBarContainer = styled.div`
  background-color: #282828;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Item = styled.div<IItem>`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "stretch")};
  ${(props) => props.pRight && `padding-right: ${props.pRight}`};
  ${(props) => props.pRight && `padding-right: ${props.pRight}`};
  ${(props) =>
    props.hPadding &&
    `padding-left: ${props.hPadding}; padding-right: ${props.hPadding};`};

  & > div {
    ${(props) =>
      props.hChildPadding &&
      `padding-left: ${props.hChildPadding}; padding-right: ${props.hChildPadding};`};
  }
`;

export const SubItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  &:hover {
    opacity: 0.8;
    border-bottom: 10px solid purple;
  }
  object-fit: contain;
`;

export const Logo = styled.img<ILogo>`
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${(props) => props.maxHeight && `max-height: ${props.maxHeight}`};
  margin-top: auto;
  margin-bottom: auto;
`;
