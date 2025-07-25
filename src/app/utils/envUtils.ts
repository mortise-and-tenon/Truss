import { LoginFormPositionType } from "./providers/ThemeProvider";

// LoginForm 的位置
export const Env_LoginFormPosition = (process.env
  .NEXT_PUBLIC_LOGIN_FORM_POSITION ?? "CENTER") as LoginFormPositionType;

// 头部左上角 Logo
export const Env_HeaderLogo = process.env.NEXT_PUBLIC_HEADER_LOGO ?? "/truss.png"

// 头部左上角产品名称
export const Env_ProjectName = process.env.NEXT_PUBLIC_PROJECT_NAME ?? "Truss Web"