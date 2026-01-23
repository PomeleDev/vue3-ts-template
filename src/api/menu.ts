import service from "./config/request";
import { ApiResponse } from "./type";

export interface MenuData {
  id: number;
  title: string;
  path: string;
  icon: string;
  name: string;
  sort_id: number;
  parent_id: number;
}

export const getAllMenus = (): Promise<ApiResponse<MenuData[]>> => {
  return service.get("/access/menu");
};

export const removeMenuById = (id: number): Promise<ApiResponse<MenuData[]>> => {
  return service.delete("/access/menu/" + id);
};

export const addMenu = (data: MenuData): Promise<ApiResponse<MenuData>> => {
  return service.post("/access/menu", data);
};

export const updateMenuById = (
  id: number,
  data: Partial<MenuData>
): Promise<ApiResponse<MenuData[]>> => {
  return service.put("/access/menu/" + id, data);
};

export const updateBulkMenu = (data: Partial<MenuData>[]): Promise<ApiResponse> => {
  return service.patch("/access/menu/update", { access: data });
};
