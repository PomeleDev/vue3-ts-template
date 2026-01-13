import service from "./config/request";
import { ApiResponse } from "./type";

export interface IRole {
  id: number;
  name: string;
  description: string;
  is_default: number;
}

export interface IRoleState {
  roles: IRole[];
  count: number;
}
export interface IRoleParams {
  pageNum: number;
  pageSize: number;
}
// 获取
export const getRoles = (
  params = { pageNum: 0, pageSize: 10 }
): Promise<ApiResponse<IRoleState>> => {
  return service.get("/role", {
    params,
  });
};
export const addRole = (data: IRole): Promise<ApiResponse> => {
  return service.post("/role", data);
};
export const updateRole = (id: number, data: Partial<IRole>): Promise<ApiResponse> => {
  return service.put("/role/" + id, data);
};
export const removeRole = (id: number): Promise<ApiResponse> => {
  return service.delete("/role/" + id);
};
