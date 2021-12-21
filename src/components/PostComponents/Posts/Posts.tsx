import { FC } from "react";
import { Button } from "../../styledComponents/Button";
import { Input } from "../../styledComponents/Inputs";
import {
  ImagePost,
  PostContainer,
  PostHeader,
  PostContent,
  LikesContainer,
  CommentSection,
} from "./styles";
import { Grid } from "../../GridSystem/GridSystem";
import {
  faCommentDots,
  faEllipsisV,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Post.scss";
import { Colors } from "../../../GeneralStyles/colors";
import Image from "../../ImageContainer/index";
import PostLogic from "./Logic";
import { IPost } from "../../../context/PostContext/PostContext";

const buttonsStyles = {
  fontSize: "1.3rem",
  background: "transparent",
  color: "lightgray",
  width: "100%",
};
interface propsType {
  post: IPost;
  colorLike?: string;
}

const { likeColor } = Colors;

const PostComponent: FC<propsType> = ({ post, colorLike = likeColor }) => {
  const { onClickHearth, liked, personsWhoLike } = PostLogic({ post });
  return (
    <PostContainer className="post">
      <PostHeader className="post-header">
        <Grid
          gap="20px"
          className="header-grid"
          align="center"
          columns="0.5fr 1fr"
        >
          <div className="image-header-container">
            <ImagePost src={post.file} />
          </div>
          <span>{post.user.firstName}</span>
        </Grid>
      </PostHeader>

      {post.file && (
        <Grid rows="800px" columns="1fr">
          <ImagePost src={post.file} alt={`image post ${post._id}`} />
        </Grid>
      )}

      <PostContent>
        <LikesContainer>
          <Grid columns="repeat(3,1fr)">
            <Button onClick={onClickHearth} {...buttonsStyles}>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: liked ? colorLike : "" }}
              />
            </Button>

            <Button {...buttonsStyles}>
              <FontAwesomeIcon icon={faCommentDots} />
            </Button>
            <Button {...buttonsStyles}>
              <FontAwesomeIcon icon={faEllipsisV} />
            </Button>
          </Grid>
        </LikesContainer>
        <PostContent justify="flex-start" direction="row">
          {personsWhoLike.length > 0 && (
            <>
              <Image
                alt="dots"
                src={process?.env?.REACT_APP_DEFAULT_USER_PHOTO || "Hola"}
              />
              <p style={{ marginLeft: 15 }}>
                liked by {personsWhoLike.length} persons
              </p>
            </>
          )}
        </PostContent>
        {post.description && (
          <p className="description">
            <span className="bold">{post.user.firstName}: </span>
            {post.description}
          </p>
        )}
      </PostContent>
      <CommentSection>
        <Input width="100%" padding="5px 10px" placeholder="Add a comment..." />
      </CommentSection>
    </PostContainer>
  );
};

export default PostComponent;
