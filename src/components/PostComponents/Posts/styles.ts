import styled from "styled-components";

interface IPostHeader {
  justify?: string;
}

interface IPostContent extends IPostHeader {
  direction?: string;
}

export const ImagePost = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const PostContainer = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
export const PostHeader = styled.div<IPostHeader>`
  display: flex;
  justify-content: ${(props) => props.justify || "space-between"};
  padding: 10px;
  align-text: center;
`;

export const PostContent = styled(PostHeader)<IPostContent>`
  flex-direction: ${(props) => props.direction || "column"};
  p {
    margin: 0px;
  }
`;
export const CommentSection = styled(PostHeader)``

export const LikesContainer = styled(PostHeader)`
  align-items: center;
  padding: 0px;
`;

export const ImageContainer = styled.div`
  max-height: 600px;
  width: 100%;
  overflow: hidden;
`;
