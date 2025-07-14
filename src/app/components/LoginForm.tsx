"use client";
import { useContext } from "react";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { I18nContext } from "../utils/providers/I18nProvider";

/**
 * 登录表单
 * 用于完成登录数据的填写
 * @returns
 */
export default function LoginForm() {
  const { i18n } = useContext(I18nContext);

  return (
    <div className="w-full max-w-sm glass rounded-xl p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{i18n("login.title")}</h1>
        <p className="mt-2">{i18n("login.subtitle")}</p>
      </div>
      <div className="py-8 flex justify-center w-full">
        <form className="space-y-2 flex flex-col justify-center">
          <label className="input input-primary input-lg w-xs">
            <AiOutlineUser />
            <input
              type="text"
              placeholder={i18n("login.username_placeholder")}
            />
          </label>
          <label className="input input-primary input-lg w-xs">
            <AiOutlineLock />
            <input
              type="password"
              placeholder={i18n("login.password_placeholder")}
            />
          </label>
          <div className="flex justify-between">
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              {i18n("login.auto_login")}
            </label>
            <button className="btn btn-link">
              {i18n("login.forget_password")}
            </button>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            {i18n("login.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
