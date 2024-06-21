import axios from "axios";
import { User } from "../types";

type UsersApiResponse = {
  users: User[];
};

export const fetchUsers = async (pageIndex: number) => {
  try {
    const response = await axios.get<UsersApiResponse>(
      `https://give-me-users-forever.vercel.app/api/users/${pageIndex}/next`
    );
    return response.data?.users;
  } catch (error) {
    console.error(error);
  }
};
