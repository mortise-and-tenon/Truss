import { useContext, useState } from "react";
import { I18nContext } from "../utils/providers/I18nProvider";
import { useTranslations } from "next-intl";

/**
 * 底部组件，用于展示版本信息等
 * 使用了国际化串：copyright
 */
export default function Footer() {
  //国际化
  const t = useTranslations();
  return (
    <div className="h-12 flex justify-center items-center text-white text-base">{`${t(
      "copyright"
    )} © ${new Date().getFullYear()} ${t("corp_name")}`}</div>
  );
}
