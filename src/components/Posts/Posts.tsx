import { FC } from "react";
import { IPost } from "../../context/PostContext/PostContext";
import { Button } from "../styledComponents/Button";
import { ImageContainer, ImagePost, PostContainer } from "./styles";
import { Grid } from "../GridSystem/GridSystem";
import {
  faCommentDots,
  faEllipsisV,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface propsType {
  post: IPost;
}
const buttonsStyles = {
  fontSize: "1.3rem",
  background: "transparent",
  color: "lightgray",
  width: "100%",
};

const PostComponent: FC<propsType> = ({ post }) => {
  return (
    <PostContainer>
      {post.file && (
        <Grid rows='800px' columns="1fr">
          <ImagePost src={post.file} alt={`image post ${post._id}`} />
        </Grid>
      )}
      <Grid padding="15px 10px" columns="1fr 1fr">
        <span>
          {" "}
          {post.user.firstName} {post.user.lastName}
        </span>
        <Grid columns="repeat(3,1fr)">
          <Button {...buttonsStyles}>
            <FontAwesomeIcon icon={faHeart} />
          </Button>

          <Button {...buttonsStyles}>
            <FontAwesomeIcon icon={faCommentDots} />
          </Button>
          <Button {...buttonsStyles}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </Button>
        </Grid>
      </Grid>
      <span>{post.description}</span>
    </PostContainer>
  );
};

export default PostComponent;
