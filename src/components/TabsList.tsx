import { useState } from "react";
import { tabs } from "../dummyData";
import { TabItem } from "./TabItem";

type Props = {
  closeSidebar: () => void;
};

export const TabsList: React.FC<Props> = ({ closeSidebar }) => {
  const [selectedTab, setSelectedTab] = useState("Stories");

  const handleClick = (tabTitle: string) => {
    setSelectedTab(tabTitle);
    closeSidebar();
  };

  return (
    <ul className="flex flex-col">
      {tabs.map((tab, i) => {
        const isSelected = selectedTab === tab.title;

        return (
          <TabItem
            key={tab.title}
            isSelected={isSelected}
            handleClick={handleClick}
            tab={tab}
            index={i}
          />
        );
      })}
    </ul>
  );
};
