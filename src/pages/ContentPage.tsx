import { stories, statuses } from "../dummyData";
import { StoriesTable } from "../components/StoriesTable";
import { useRef, useState } from "react";

type Props = {
  isSideBarOpen: boolean;
};

export const ContentPage: React.FC<Props> = ({ isSideBarOpen }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value);
  };

  const handleSearch = () => {
    setSearchFilter(searchInputRef.current!.value || "");
  };

  return (
    <main className="bg-dark-200 w-full lg:pb-[30px] lg:pr-[30px] overflow-x-hidden">
      <div className="bg-[#F9F9F9] py-5 lg:rounded-b-2xl">
        <div className="flex flex-col px-4 mb-[14px]">
          <div className="flex justify-between mb-6">
            <h1 className="font-bold text-3xl text-dark-200">Stories</h1>
            <button className="btn xl:hidden">+ New Story</button>
          </div>
          <div className="flex justify-between lg:justify-normal">
            <div className="flex rounded border border-grey-100 mr-4 w-full max-w-sm">
              <input
                type="text"
                placeholder="Search"
                className="outline-none rounded py-2 pl-3 pr-2 w-full"
                ref={searchInputRef}
              />
              <button
                className="bg-grey-200 px-2 flex justify-center items-center cursor-pointer hover:bg-customGreen transition-colors"
                onClick={handleSearch}
              >
                <img src="./svg/search.svg" alt="search icon" />
              </button>
            </div>
            <select
              name="status"
              id="status-select"
              defaultValue=""
              className="text-black rounded border border-grey-100 py-2 pl-3 pr-2 w-full max-w-[200px]"
              onChange={handleChange}
            >
              <option value="all">All Statuses</option>
              {statuses.map((status) => (
                <option key={status.title} value={status.title}>
                  {status.title}
                </option>
              ))}
            </select>
            <div className="hidden lg:flex items-center ml-[30px] text-sm flex-1 justify-end xl:justify-normal">
              Showing 1 to {stories.length} of {stories.length}
            </div>
            <button className="btn hidden xl:block">+ New Story</button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <StoriesTable
            statusFilter={statusFilter}
            searchFilter={searchFilter}
          />
        </div>
      </div>
      {isSideBarOpen && <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10 lg:hidden"></div>}
    </main>
  );
};
