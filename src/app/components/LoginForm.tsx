"use client";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";

export default function LoginForm() {
  return (
    <div className="w-full max-w-sm glass rounded-xl p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">欢迎回来</h1>
        <p className="mt-2">请登录以继续访问</p>
      </div>
      <div className="py-8 flex justify-center w-full">
        <form className="space-y-2 flex flex-col justify-center">
          <label className="input input-primary input-lg w-xs">
            <AiOutlineUser />
            <input type="text" placeholder="用户名或邮箱" />
          </label>
          <label className="input input-primary input-lg w-xs">
            <AiOutlineLock />
            <input type="password" placeholder="密码" />
          </label>
          <div className="flex justify-between">
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              自动登录
            </label>
            <button className="btn btn-link">忘记密码</button>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            登录
          </button>
        </form>
      </div>
    </div>
  );
}
