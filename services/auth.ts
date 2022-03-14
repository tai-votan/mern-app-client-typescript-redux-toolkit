import request from "@/utils/request";
import { AuthLogin } from "@/interfaces/auth";

async function userLogin(params: AuthLogin) {
  return request("/api/v3/account/login", {
    method: "POST",
    data: params,
  });
}

export default {
  userLogin,
};
