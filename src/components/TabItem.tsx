import { tabs } from "../dummyData";

type Props = {
  isSelected: boolean;
  handleClick: (title: string) => void;
  tab: {
    title: string;
    iconPath: string;
    type: string;
  };
  index: number;
};

export const TabItem: React.FC<Props> = ({
  isSelected,
  handleClick,
  tab,
  index,
}) => {
  return (
    <li key={tab.title} className="group">
      {tabs[index - 1]?.type !== tab.type && index > 0 && (
        <div className="my-5 w-full h-[1px] bg-gradient-to-r from-[#484848]"></div>
      )}
      <div
        key={tab.title}
        className={`relative flex text-white h-14 items-center hover:bg-dark-100 transition-colors lg:cursor-pointer ${
          isSelected ? "bg-dark-100 " : ""
        } group-last-of-type:mb-0`}
        onClick={() => handleClick(tab.title)}
      >
        <div
          className={`left-0 w-1 bg-[#76A0F0] absolute h-full ${
            isSelected ? "block" : "hidden"
          }`}
        ></div>
        <img
          src={tab.iconPath}
          alt={tab.title + " icon"}
          className="ml-5 w-5 h-[18px] mr-2"
        />
        <span className="text-sm">{tab.title}</span>
      </div>
    </li>
  );
};
