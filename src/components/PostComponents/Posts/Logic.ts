import { useContext, useState, useEffect } from "react";
import PostContext from "../../../context/PostContext/PostContext";
import { ILike } from "../../../httpsRequest/httpsRequest";
import { IPost } from "../../../context/PostContext/PostContext";

interface propsType {
  post: IPost;
}

interface returnType {
  onClickHearth: () => Promise<void>;
  personsWhoLike: ILike[];
  liked: boolean;
}

const PostLogic = (props: propsType): returnType => {
  const { post } = props;
  const { likePost, unlikePost, getPostLikes } = useContext(PostContext);
  const [liked, setLiked] = useState(false);
  const [personsWhoLike, setPersonsWhoLike] = useState<ILike[]>([]);

  const likesOfMyPost = async () => {
    if (!getPostLikes) return;
    const data = await getPostLikes(post._id);
    if (data.liked) setLiked(data.liked);
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

  return {
    onClickHearth,
    personsWhoLike,
    liked,
  };
};

export default PostLogic;
