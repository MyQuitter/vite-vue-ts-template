// 登录接口携带参数ts类型
export interface loginFrom {
    username: string,
    password: string
}

interface dataType{
    token:string
}

// 登录接口返回的数据类型
export interface loginResponseDate{
    code: number,
    data: dataType
}

// 定义服务器返回用户信息相关的数据类型
interface userInfo{
    userId:number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}

interface user{
    checkUser: userInfo
}

export interface userResponseDate{
    code: number,
    data: user
}