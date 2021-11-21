import { FC, useContext, useState, useEffect } from "react";
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
import PostContext from "../../context/PostContext/PostContext";
import "./Post.scss";
import { Colors } from "../../GeneralStyles/colors";
import { ILike } from "../../httpsRequest/httpsRequest";

interface propsType {
  post: IPost;
  colorLike?: string;
}
const buttonsStyles = {
  fontSize: "1.3rem",
  background: "transparent",
  color: "lightgray",
  width: "100%",
};

const { likeColor } = Colors;
const PostComponent: FC<propsType> = ({ post, colorLike = likeColor }) => {
  const { likePost, unlikePost, getPostLikes } = useContext(PostContext);
  const [liked, setLiked] = useState(false);
  const [personsWhoLike, setPersonsWhoLike] = useState<ILike[]>([]);

  const likesOfMyPost = async () => {
    if (!getPostLikes) return;
    const data = await getPostLikes(post._id);
    console.log(data)
    if (typeof data.liked === "boolean") setLiked(data.liked);
    if (data.likes) setPersonsWhoLike(data.likes);
  };
  useEffect(() => {
    likesOfMyPost();
  //eslint-disable-next-line
  }, [liked, post._id]);

  const like = async () => {
    if (!likePost) return;
    const success = await likePost(post._id);
    setLiked(success);
  };
  const unlike = async () => {
    if (!unlikePost) return;
    const success = await unlikePost(post._id);
    if (success) setLiked((prev) => !prev);
  };
  const onClickHearth = async () => {
    if (liked) unlike();
    else like();
  };

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
        <span>{post.description}</span>
        <p>{personsWhoLike.length} persons</p>
      </PostContent>
    </PostContainer>
  );
};

export default PostComponent;
