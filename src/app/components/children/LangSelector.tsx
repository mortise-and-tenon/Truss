"use client";

import { I18nContext } from "@/app/utils/providers/I18nProvider";
import { useTranslations } from "next-intl";
import { useContext, useEffect } from "react";
import { IoLanguageOutline } from "react-icons/io5";

export default function LangSelector() {
  //国际化
  const t = useTranslations("locales");

  //支持的语言列表
  const langList = ["zh", "en"];

  const { locale, setLocale } = useContext(I18nContext);

  const onSelectLocale = (selectedLocale: string) => {
    setLocale(selectedLocale);
    window.location.reload();
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="m-1 btn btn-ghost">
        {locale ? (
          <>
            <IoLanguageOutline />
            {t(langList.find((item) => item === locale) || "zh")}
          </>
        ) : (
          <span className="loading loading-ring loading-md"></span>
        )}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm glass space-y-1"
      >
        {langList.map((item) => (
          <li key={item}>
            {item === locale ? (
              <a className="bg-gray-200 pointer-events-none">{t(item)}</a>
            ) : (
              <a onClick={() => onSelectLocale(item)}>{t(item)}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
