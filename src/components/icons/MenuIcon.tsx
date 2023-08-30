type Props = {
  isSideBarOpen: boolean;
  toggleSidebar: () => void;
};

export const MenuIcon: React.FC<Props> = ({ isSideBarOpen, toggleSidebar }) => (
  <div
    className={`group flex flex-col space-y-1 mr-5 lg:hidden cursor-pointer ${
      isSideBarOpen ? "open" : ""
    }`}
    onClick={toggleSidebar}
  >
    <div className="h-0.5 w-6 bg-white group-[.open]:rotate-45 group-[.open]:translate-y-0.5 transition-transform duration-300"></div>
    <div className="h-0.5 w-6 bg-white group-[.open]:hidden transition duration-300"></div>
    <div className="h-0.5 w-6 bg-white group-[.open]:-rotate-45 group-[.open]:-translate-y-1 transition-transform duration-300"></div>
  </div>
);
