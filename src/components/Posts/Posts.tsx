import { FC } from "react";
import { IPost } from "../../context/PostContext/PostContext";
import { Button } from "../styledComponents/Button";
import { ImagePost, PostContainer, PostHeader, PostContent } from "./styles";
import { Grid } from "../GridSystem/GridSystem";
import {
  faCommentDots,
  faEllipsisV,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Post.scss";
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
  console.log(post);
  return (
    <PostContainer className="post">
      <PostHeader className="post-header">
        <Grid gap='20px' className='header-grid' align='center'  columns="0.5fr 1fr">
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
      <span>{post.description}</span>
      </PostContent>
    </PostContainer>
  );
};

export default PostComponent;
