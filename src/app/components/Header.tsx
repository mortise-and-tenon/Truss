import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../utils/providers/ThemeProvider";

export default function Header() {
  const { customConfig } = useContext(ThemeContext);
  return (
    <div className="h-12 glass flex items-center px-2">
      <Image src={customConfig.header.logo} width={30} height={30} alt="logo" />
      <span className="text-lg font-bold pl-2">
        {customConfig.header.title}
      </span>
    </div>
  );
}
