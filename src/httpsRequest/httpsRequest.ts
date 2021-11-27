import axios, { AxiosError } from "axios";
import {
  CREATE_POST,
  CURRENT_USER,
  GET_POST,
  LOGIN,
  LIKE_POST,
} from "../constants";
import { IPost } from "../context/PostContext/PostContext";

export interface ILoginResponse {
  Token: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  id: string;
}
export interface ILoginRequest {
  email: string;
  password: string;
}
export interface IgetPost {
  posts: IPost[];
}

export interface ILike {
  user?: string;
  _id?: string;
  post?: string;
}
export interface ILikePost {
  success: boolean;
  status: string;
  like: ILike;
  likes: ILike[];
  liked: boolean; 
}

const handleError = (status: number, message: string): any => {
  if (status === 401)
    return "You are not logged in. Please log in to perform this action!";

  return message;
};

export const loginRequest = async (
  body: ILoginRequest
): Promise<ILoginResponse | void> => {
  try {
    const { data }: { data: ILoginResponse } = await axios.post(LOGIN, body);
    return data;
  } catch (err: AxiosError | any) {
    if (err) {
      if (err.response)
        handleError(err.response.status, err.response.data.error);
      else if (err.request)
        handleError(err.request.status, err.request.data.error);
      else handleError(500, "An internal error occurred");
    }
  }
};

export const currentUserRequest = async (
  token: string | null
): Promise<ILoginResponse | void> => {
  try {
    if (!token) return;
    const { data }: { data: { user: ILoginResponse } } = await axios.get(
      CURRENT_USER,
      {
        headers: { Authorization: token },
      }
    );

    const { Token, name, email, role, phone, id } = data.user;
    return { Token, name, email, role, phone, id};
  } catch (err: AxiosError | any) {
    if (err) {
      if (err.response)
        handleError(err.response.status, err.response.data.error);
      else if (err.request)
        handleError(err.request.status, err.request.data.error);
      else handleError(500, "An internal error occurred");
    }
  }
};

export const createPostRequest = async (
  data: FormData,
  token: string | null
) => {
  try {
    if (!token) return;
    await axios.post(CREATE_POST, data, {
      headers: { Authorization: token },
    });
  } catch (err: AxiosError | any) {
    if (err) {
      if (err.response)
        handleError(err.response.status, err.response.data.error);
      else if (err.request)
        handleError(err.request.status, err.request.data.error);
      else handleError(500, "An internal error occurred");
    }
  }
};

export const getPostRequest = async (
  token: string | null,
  pagination: { limit: number; page: number }
) => {
  try {
    const { limit, page } = pagination;
    if (!token) return;
    const { data }: { data: IgetPost } = await axios.get(
      GET_POST + `${page}/${limit}`,
      {
        headers: { Authorization: token },
      }
    );

    return data.posts;
  } catch (err: AxiosError | any) {
    if (err) {
      if (err.response)
        handleError(err.response.status, err.response.data.error);
      else if (err.request)
        handleError(err.request.status, err.request.data.error);
      else handleError(500, "An internal error occurred");
    }
  }
};

export const likePostRequest = async (
  token: string | null,
  postId: string
): Promise<ILikePost | void> => {
  try {
    if (!token) return;

    const { data }: { data: ILikePost } = await axios.post(
      `${LIKE_POST}/${postId}`,
      null,
      {
        headers: { Authorization: token },
      }
    );

    return data;
  } catch (err: AxiosError | any) {
    if (err) {
      if (err.response)
        handleError(err.response.status, err.response.data.error);
      else if (err.request)
        handleError(err.request.status, err.request.data.error);
      else handleError(500, "An internal error occurred");
    }
    return;
  }
};

export const unlikePostRequest = async (
  token: string | null,
  postId: string
): Promise<ILikePost | void> => {
  try {
    if (!token) return;

    const { data }: { data: ILikePost } = await axios.delete(
      `${LIKE_POST}/${postId}`,
      {
        headers: { Authorization: token },
      }
    );

    return data;
  } catch (err: AxiosError | any) {
    if (err) {
      if (err.response)
        handleError(err.response.status, err.response.data.error);
      else if (err.request)
        handleError(err.request.status, err.request.data.error);
      else handleError(500, "An internal error occurred");
    }
  }
};

export const postLikedByRequest = async (
  token: string | null,
  postId: string
): Promise<{likes: ILike[], liked: boolean}|void> => {
  try {
    if (!token) return;

    const { data }: { data: ILikePost } = await axios.get(
      `${LIKE_POST}/${postId}`,
      {
        headers: { Authorization: token },
      }
    );
      return data;
  } catch (err: AxiosError | any) {
    if (err) {
      if (err.response)
        handleError(err.response.status, err.response.data.error);
      else if (err.request)
        handleError(err.request.status, err.request.data.error);
      else handleError(500, "An internal error occurred");
    }
  }
};
