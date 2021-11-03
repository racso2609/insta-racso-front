import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  getPostRequest,
  createPostRequest,
} from "../../httpsRequest/httpsRequest";
import AuthContext from "../auth/authContext";

interface IPostContext {
  getPosts?: () => void;
  page?: string;
  limit?: string;
  posts?: IPost[];
  createPost?: (data: FormData) => void;
  changePage?: (nextPage: number) => void;
}

export interface IUser{
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
  page: "1",
  limit: "20",
  posts: [] as IPost[],
};

const PostContext = createContext<IPostContext>(defaultState);

export const PostProvider: FC = ({ children }) => {
  const [page, setPage] = useState(defaultState.page);
  const [limit, setLimit] = useState(defaultState.limit);
  const [posts, setPosts] = useState<IPost[]>(defaultState.posts);
  const { getAuthToken, auth } = useContext(AuthContext);

  const getPost = async () => {
    const pagination = { limit, page };
    const posts = await getPostRequest(getAuthToken(), pagination);
    if (!posts?.length) return;
    setPosts(posts);
  };

  const changePage = (nextPage: number) => {
    setPage(nextPage.toString());
  };

  const createPost = (data: FormData) => {
    const token = getAuthToken();
    createPostRequest(data, token);
  };

  useEffect(() => {
    if(!auth) return;
    getPost();
    //eslint-disable-next-line
  }, [page, limit, auth]);

  return (
    <PostContext.Provider
      value={{ page, limit, posts, createPost, changePage }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
