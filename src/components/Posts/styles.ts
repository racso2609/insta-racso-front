import styled from 'styled-components'

export const ImagePost = styled.img`
  object-fit:cover;
  height: 100%;
  width: 100%;
`;

export const PostContainer = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 0px 0px 50px 0px;
  //border-radius: 20px;
  overflow: hidden;
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-text: center;
`

export const PostContent = styled(PostHeader)``


export const ImageContainer = styled.div`
  max-height: 600px;
  width: 100%;
  overflow: hidden;
`;
