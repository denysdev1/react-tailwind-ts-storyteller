import { useState } from "react";

type Props = {
  isSideBarOpen: boolean;
};

const tabs = [
  { title: "Schedule", iconPath: "./icons/schedule.svg", type: "standard" },
  { title: "Analytics", iconPath: "./icons/analytics.svg", type: "standard" },
  { title: "Stories", iconPath: "./icons/stories1.svg", type: "standard" },
  {
    title: "Engagement Units",
    iconPath: "./icons/engagement.svg",
    type: "standard",
  },
  { title: "Ads", iconPath: "./icons/ads.svg", type: "standard" },
  { title: "CMS Users", iconPath: "./icons/cms-users.svg", type: "advanced" },
  { title: "Roles", iconPath: "./icons/roles.svg", type: "advanced" },
  { title: "Apps", iconPath: "./icons/apps.svg", type: "advanced" },
  { title: "User guide", iconPath: "./icons/user-guide.svg", type: "faq" },
];

export const Sidebar: React.FC<Props> = ({ isSideBarOpen }) => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleClick = (tabTitle: string) => {
    setSelectedTab(tabTitle);
  };

  return (
    <nav
      className={`${
        isSideBarOpen ? "absolute" : "hidden"
      } md:block bg-dark-200 w-[228px] h-[calc(100vh-52px)] md:[calc(100vh-60px)]`}
    >
      <div className="h-[1px] bg-gradient-to-r from-[#484848] mb-5"></div>
      <ul className="flex flex-col">
        {tabs.map(({ title, iconPath, type }, i) => {
          const isSelected = selectedTab === title;

          return (
            <li className="group">
              {tabs[i - 1]?.type !== type && i > 0 && (
                <div className="my-5 w-full h-[1px] bg-gradient-to-r from-[#484848]"></div>
              )}
              <div
                key={title}
                className={`relative flex text-white h-14 items-center hover:bg-dark-100 md:cursor-pointer ${
                  isSelected ? "bg-dark-100 " : ""
                } group-last-of-type:mb-0`}
                onClick={() => handleClick(title)}
              >
                <div
                  className={`left-0 w-1 bg-[#76A0F0] absolute h-full ${
                    isSelected ? "block" : "hidden"
                  }`}
                ></div>
                <img
                  src={iconPath}
                  alt={title + " icon"}
                  className="ml-5 w-5 h-[18px] mr-2"
                />
                <span className="text-sm">{title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
