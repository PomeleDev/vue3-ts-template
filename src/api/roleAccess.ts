import service from "./config/request";
import { MenuData } from "./menu";
import { ApiResponse } from "./type";

export interface IRoleAccess {
  id: number;
  access_id: number;
  role_id: number;
}

export type IRoleAccessList = IRoleAccess[];

// 获取角色对应权限
export const getRoleAccess = (id: number): Promise<ApiResponse<IRoleAccessList>> => {
  return service.get(`/role_access/${id}`);
};
// 给角色分配权限
export const allocRoleAccess = (id: number, data: number[]): Promise<ApiResponse> => {
  return service.post(`/role_access/${id}`, {
    access: data,
  });
};

export const getRoleAccessByRoles = (
  roles: number[]
): Promise<ApiResponse<{ access: MenuData[] }>> => {
  return service.post(`/role_access/role/access`, {
    roles,
  });
};
