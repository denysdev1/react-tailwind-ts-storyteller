import { FC } from "react";
import { TabsList } from "./TabsList";

type Props = {
  isSideBarOpen: boolean;
  closeSidebar: () => void;
};

export const Sidebar: FC<Props> = ({ isSideBarOpen, closeSidebar }) => {
  return (
    <nav
      className={`${
        isSideBarOpen ? "fixed" : "hidden"
      } bg-dark-200 min-w-[228px] w-[228px] min-h-[calc(100vh-52px)] lg:min-h-[calc(100vh-60px)] lg:block lg:static z-20`}
    >
      <div className="h-[1px] bg-gradient-to-r from-[#484848] mb-5"></div>
      <TabsList closeSidebar={closeSidebar} />
    </nav>
  );
};
