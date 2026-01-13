import type { IUserLoginData } from "@/api/user";
import { login as loginApi } from "@/api/user";
import { setToken, removeToken } from "@/utils/auth";
import { useTagsView } from "./tagsView";
export const useUserStore = defineStore("user", () => {
  const state = reactive({
    token: "",
  });
  const tagsViewStore = useTagsView();

  const login = async (userInfo: IUserLoginData) => {
    try {
      const { username, password } = userInfo;
      const response = await loginApi({ username: username.trim(), password });
      const { data } = response;
      state.token = data.token;
      setToken(data.token);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const logout = () => {
    state.token = "";
    removeToken();
    // 所有的信息都应该情况
    tagsViewStore.delAllView(); // ...
  };
  return { login, state, logout };
});
