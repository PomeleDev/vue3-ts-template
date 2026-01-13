import request from "@/api/config/request";
import { ApiResponse } from "./type";
import { IRole } from "./role";

export interface Profile {
  id: number;
  username: string;
  email: string;
  mobile: string;
  isSuper: boolean;
  status: boolean;
  avatar: string;
  description: string;
  roles: IRole[];
  roleIds?: number[]; // 修改用户的时候，后端接受只要id
}
export interface IUserLoginData {
  username: string;
  password: string;
}

export interface ILoginResponseData {
  token: string;
}
// 登录接口
export const login = (data: IUserLoginData): Promise<ApiResponse<ILoginResponseData>> => {
  return request.post("/auth/login", data);
};
