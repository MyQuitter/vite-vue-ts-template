// 统一管理用户相关的接口

import request from "@/utils/request";
import type { loginFrom,loginResponseDate,userResponseDate } from "./type";

enum API{
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info'
}

// 登录接口方法
export const reqLogin = (data:loginFrom) => request.post<any,loginResponseDate>(API.LOGIN_URL,data);

// 获取用户信息
export const reqUserInfo = () => request.get<any,userResponseDate>(API.USERINFO_URL);