import axios from "axios";
import { CREATE_POST, CURRENT_USER, GET_POST, LOGIN } from "../constants";
import { IPost } from "../context/PostContext/PostContext";

export interface ILoginResponse {
  Token: string;
  name: string;
  email: string;
  role: string;
  phone: string;
}
export interface ILoginRequest {
  email: string;
  password: string;
}
export interface IgetPost {
  posts: IPost[];
}

const handleError = (status: number, message: any): any => {
  if (status === 401)
    return "You are not logged in. Please log in to perform this action!";

  return message.data.error;
};

export const loginRequest = async (
  body: ILoginRequest
): Promise<ILoginResponse | void> => {
  try {
    const { data }: { data: ILoginResponse } = await axios.post(LOGIN, body);
    return data;
  } catch (error) {
    if (error) {
      if (axios.isAxiosError(error)) {
        const status = error?.response?.status || 0;
        const message = error?.response;
        throw handleError(status, message);
      } else if (error instanceof Error) {
        const message = error.message;
        throw handleError(0, message);
      }
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

    const { Token, name, email, role, phone } = data.user;
    return { Token, name, email, role, phone };
  } catch (error) {
    if (error) {
      if (axios.isAxiosError(error)) {
        const status = error?.response?.status || 0;
        const message = error?.response;
        throw handleError(status, message);
      } else if (error instanceof Error) {
        const message = error.message;
        throw handleError(0, message);
      }
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
  } catch (error) {
    if (error) {
      if (axios.isAxiosError(error)) {
        const status = error?.response?.status || 0;
        const message = error?.response;
        throw handleError(status, message);
      } else if (error instanceof Error) {
        const message = error.message;
        throw handleError(0, message);
      }
    }
  }
};

export const getPostRequest = async (
  token: string | null,
  pagination: { limit: number; page: number}
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

    return data.posts ;
  } catch (error) {
    if (error) {
      if (axios.isAxiosError(error)) {
        const status = error?.response?.status || 0;
        const message = error?.response;
        throw handleError(status, message);
      } else if (error instanceof Error) {
        const message = error.message;
        throw handleError(0, message);
      }
    }
  }
};
