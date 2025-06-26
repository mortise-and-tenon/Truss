import { LoginFormPositionType } from "./providers/ThemeProvider";

// LoginForm 的位置
export const Env_LoginFormPosition = (process.env
  .NEXT_PUBLIC_LOGIN_FORM_POSITION ?? "CENTER") as LoginFormPositionType;
