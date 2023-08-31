import { StoriesTable } from "../components/StoriesTable";
import { useEffect, useState } from "react";
import { FC } from "react";
import { useMockApiRequest } from "../hooks/useMockApiRequest";
import { Story } from "../types/Story";
import { Status } from "../types/Status";

type Props = {
  isSideBarOpen: boolean;
};

export const ContentPage: FC<Props> = ({ isSideBarOpen }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { data: storiesData, isLoading } = useMockApiRequest("stories");
  const { data: statusesData } = useMockApiRequest("statuses");
  const [stories, setStories] = useState<Story[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);

  useEffect(() => {
    if (storiesData) {
      setStories(storiesData as Story[]);
    }

    if (statusesData) {
      setStatuses(statusesData as Status[]);
    }
  }, [storiesData, statusesData]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const handleDeleteStory = (id: number) => {
    setStories((prevStories) => prevStories.filter((story) => story.id !== id));
  };

  const filteredStories = stories
    .filter(({ title, lastModified, liveFrom, ends }) => {
      const lowerCaseFilter = searchFilter.toLowerCase();

      return (
        title.toLowerCase().includes(lowerCaseFilter) ||
        lastModified.toLowerCase().includes(lowerCaseFilter) ||
        liveFrom?.toLowerCase().includes(lowerCaseFilter) ||
        ends?.toLowerCase().includes(lowerCaseFilter)
      );
    })
    .filter((story) => {
      if (statusFilter === "all") {
        return true;
      }

      return story.status === statusFilter;
    });

  return (
    <main className="bg-dark-200 w-full lg:pb-[30px] lg:pr-[30px] overflow-x-hidden">
      <div className="bg-[#F9F9F9] py-5 lg:rounded-b-2xl min-h-[calc(100vh-52px)] lg:min-h-0">
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
                onChange={handleSearch}
              />
              <button className="bg-grey-200 px-2 flex justify-center items-center cursor-pointer hover:bg-customGreen transition-colors">
                <img src="./svg/search.svg" alt="search icon" />
              </button>
            </div>
            <select
              name="status"
              id="status-select"
              defaultValue=""
              className="text-black rounded border border-grey-100 py-2 pl-3 pr-2 w-full max-w-[200px] appearance-none"
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
              Showing 1 to {filteredStories.length} of {stories.length}
            </div>
            <button className="btn hidden xl:block">+ New Story</button>
          </div>
        </div>
        <div className={`relative ${!isLoading ? "overflow-x-auto" : ""}`}>
          {isLoading && (
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {!isLoading && stories.length > 0 && (
            <StoriesTable
              stories={filteredStories}
              handleDeleteStory={handleDeleteStory}
            />
          )}
          {!isLoading && !stories.length && (
            <div className="text-center">No data...</div>
          )}
        </div>
      </div>
      {isSideBarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10 lg:hidden"></div>
      )}
    </main>
  );
};
