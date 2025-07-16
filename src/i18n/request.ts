import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

/**
 * Next-intl 组件用于服务端读取国际化文件的实现
 * 无法用于 Tauri 这种纯客户端的情况，需要使用 I18nContext
 */
export default getRequestConfig(async () => {
  const defaultLocale = "zh";
  //读取用户设置的语言
  let locale = (await cookies()).get("locale")?.value;
  if (!locale) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
