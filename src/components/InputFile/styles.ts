import styled from "styled-components";

export const InputFileArea = styled.div`
  border: solid purple 5px;
  min-height: 190px;
  max-height: 500px;
  overflow: hidden;
  @media (min-width: 1300px){
    max-height: 500px;
  }
`;

export const ImageArea = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
