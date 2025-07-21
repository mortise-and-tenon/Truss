"use client";
import { useTranslations } from "next-intl";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";

/**
 * 登录表单
 * 用于完成登录数据的填写
 * @returns
 */
export default function LoginForm() {
  //国际化
  const translate = useTranslations("login");

  return (
    <div className="w-full max-w-sm glass rounded-xl p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{translate("title")}</h1>
        <p className="mt-2">{translate("subtitle")}</p>
      </div>
      <div className="tabs tabs-border p-8 flex justify-center">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          defaultChecked
          aria-label={translate("account_tab")}
        />
        <div className="tab-content p-4">
          <div className="flex justify-center w-full">
            <form className="space-y-2 flex flex-col justify-center">
              <label className="input input-primary input-lg w-xs">
                <AiOutlineUser />
                <input
                  type="text"
                  placeholder={translate("username_placeholder")}
                />
              </label>
              <label className="input input-primary input-lg w-xs">
                <AiOutlineLock />
                <input
                  type="password"
                  placeholder={translate("password_placeholder")}
                />
              </label>
              <div className="flex justify-between">
                <label className="label">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  {translate("auto_login")}
                </label>
                <button className="btn btn-link">
                  {translate("forget_password")}
                </button>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                {translate("submit")}
              </button>
            </form>
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={translate("phone_tab")}
        />
        <div className="tab-content p-4">
          <div className="flex justify-center w-full">
            <form className="space-y-2 flex flex-col justify-center">
              <label className="input input-primary input-lg w-xs">
                <AiOutlineUser />
                <input
                  type="text"
                  placeholder={translate("phone_placeholder")}
                />
              </label>
              <div className="flex items-center space-x-1">
                <label className="input input-primary input-lg">
                  <AiOutlineLock />
                  <input
                    type="text"
                    placeholder={translate("code_placeholder")}
                  />
                </label>
                <button className="btn btn-primary btn-outline">
                  发送验证码
                </button>
              </div>
              <div className="flex justify-between">
                <label className="label">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  {translate("auto_login")}
                </label>
                <button className="btn btn-link">
                  {translate("forget_password")}
                </button>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                {translate("submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
