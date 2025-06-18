import Image from "next/image";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { FaLock, FaRegUser } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";

export default function Home() {
  return <div className="w-full h-screen flex justify-end items-center">
    <div className="w-full max-w-xs pr-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">欢迎回来</h1>
        <p className="mt-2">请登录以继续访问</p>
      </div>
      <div className="py-8 flex justify-center w-full">
        <form className="w-full space-y-2">
          <label className="input input-primary">
            <AiOutlineUser />
            <input type="text" placeholder="用户名或邮箱" />
          </label>
          <label className="input input-primary">
            <AiOutlineLock />
            <input type="password" placeholder="密码" />
          </label>
        </form>
      </div>
    </div>
  </div>
}
