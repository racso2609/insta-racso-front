import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  getPostRequest,
  createPostRequest,
  likePostRequest,
  unlikePostRequest,
  postLikedByRequest,
  ILike,
} from "../../httpsRequest/httpsRequest";
import AuthContext from "../auth/authContext";
import SocketIoContext from "../socketIo/socketIoContext";

interface IPostContext {
  getPosts?: () => void;
  page?: number;
  limit?: number;
  posts?: IPost[];
  createPost?: (data: FormData) => void;
  changePage?: (nextPage: number) => void;
  setPostLimit?: (limit: number) => void;
  likePost?: (postId: string) => Promise<boolean>;
  unlikePost?: (postId: string) => Promise<boolean>;
  getPostLikes?: (
    postId: string
  ) => Promise<{ likes: ILike[]; liked: boolean }>;
}

export interface IUser {
  firstName: string;
  lastName: string;
  _id: string;
  email: string;
}

export interface IPost {
  user: IUser;
  file: string;
  description: string;
  postType: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

const defaultState = {
  page: 1,
  limit: 20,
  posts: [] as IPost[],
};

const PostContext = createContext<IPostContext>(defaultState);

export const PostProvider: FC = ({ children }) => {
  const [page, setPage] = useState(defaultState.page);
  const [limit, setLimit] = useState(defaultState.limit);
  const [posts, setPosts] = useState<IPost[]>(defaultState.posts);
  const { getAuthToken, auth } = useContext(AuthContext);
  const { socket } = useContext(SocketIoContext);

  const getPost = async () => {
    const pagination = { limit, page };
    const posts = await getPostRequest(getAuthToken(), pagination);
    if (!posts?.length) return;
    setPosts(posts);
  };

  const likePost = async (postId: string) => {
    const data = await likePostRequest(getAuthToken(), postId);
    if (!data || !data.like) return false;
    return true;
  };
  const unlikePost = async (postId: string) => {
    const data = await unlikePostRequest(getAuthToken(), postId);
    if (!data || !data.like) return false;
    return true;
  };
  const getPostLikes = async (postId: string) => {
    const data = await postLikedByRequest(getAuthToken(), postId);
    if(data)
    return data;
    else return {likes: [],liked: false}
  };

  const setPostLimit = (limit: number) => {
    setLimit(limit);
  };

  const changePage = (nextPage: number) => {
    setPage(nextPage);
  };

  const createPost = (data: FormData) => {
    const token = getAuthToken();
    createPostRequest(data, token);
  };

  useEffect(() => {
    if (!auth) return;
    getPost();
    //eslint-disable-next-line
  }, [page, limit, auth]);

  return (
    <PostContext.Provider
      value={{
        setPostLimit,
        page,
        limit,
        posts,
        createPost,
        changePage,
        likePost,
        unlikePost,
        getPostLikes,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
