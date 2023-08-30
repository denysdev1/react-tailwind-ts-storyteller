import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "./icons/Logo";
import { MenuIcon } from "./icons/MenuIcon";

type Props = {
  isSideBarOpen: boolean;
  toggleSidebar: () => void;
};

export const Header: React.FC<Props> = ({ isSideBarOpen, toggleSidebar }) => {
  return (
    <header className="bg-dark-200 py-2 flex items-center justify-between px-3.5 lg:pl-5 lg:pr-[30px] lg:py-2.5">
      <div className="flex items-center z-20">
        <MenuIcon isSideBarOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />
        <Logo className="space-x-3 w-40 lg:w-80" />
      </div>
      <div className="flex items-center z-20">
        <FontAwesomeIcon
          color="white"
          icon={faCircleQuestion}
          cursor="pointer"
          size="lg"
          className="mr-3 lg:h-6 lg:mr-8"
        />
        <div className="bg-[#103B8E] rounded-full p-1.5 px-2 lg:text-xl text-white text-sm font-normal text-center cursor-pointer">
          RJ
        </div>
      </div>
    </header>
  );
};
