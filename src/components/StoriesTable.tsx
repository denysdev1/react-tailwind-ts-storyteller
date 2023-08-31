import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { statuses } from "../dummyData";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Image } from "../types/Image";
import { FC } from "react";
import { Story } from "../types/Story";

type Props = {
  stories: Story[];
  handleDeleteStory: (id: number) => void;
};

export const StoriesTable: FC<Props> = ({ stories, handleDeleteStory }) => (
  <table className="w-full">
    <thead className="text-sm font-semibold text-[#171A25BF] text-left">
      <tr className="whitespace-nowrap">
        <th className="px-5 pb-2 lg:cursor-pointer">
          <div className="flex items-center">
            Title
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#A3A4AB] hover:stroke-[#444647] h-4 w-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 3l0 18"></path>
              <path d="M10 18l-3 3l-3 -3"></path>
              <path d="M7 21l0 -18"></path>
              <path d="M20 6l-3 -3l-3 3"></path>
            </svg>
          </div>
        </th>
        <th className="px-5 pb-2">Pages</th>
        <th className="px-5 pb-2 lg:cursor-pointer">
          <div className="flex items-center">
            Last Modified
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#A3A4AB] hover:stroke-[#444647] h-4 w-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 3l0 18"></path>
              <path d="M10 18l-3 3l-3 -3"></path>
              <path d="M7 21l0 -18"></path>
              <path d="M20 6l-3 -3l-3 3"></path>
            </svg>
          </div>
        </th>
        <th className="px-5 pb-2 lg:cursor-pointer">
          <div className="flex items-center">
            Status
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#A3A4AB] hover:stroke-[#444647] h-4 w-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 3l0 18"></path>
              <path d="M10 18l-3 3l-3 -3"></path>
              <path d="M7 21l0 -18"></path>
              <path d="M20 6l-3 -3l-3 3"></path>
            </svg>
          </div>
        </th>
        <th className="px-5 pb-2 lg:cursor-pointer">
          <div className="flex items-center">
            Live From
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#A3A4AB] hover:stroke-[#444647] h-4 w-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 3l0 18"></path>
              <path d="M10 18l-3 3l-3 -3"></path>
              <path d="M7 21l0 -18"></path>
              <path d="M20 6l-3 -3l-3 3"></path>
            </svg>
          </div>
        </th>
        <th className="px-5 pb-2 lg:cursor-pointer">
          <div className="flex items-center">
            Ends
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#A3A4AB] hover:stroke-[#444647] h-4 w-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 3l0 18"></path>
              <path d="M10 18l-3 3l-3 -3"></path>
              <path d="M7 21l0 -18"></path>
              <path d="M20 6l-3 -3l-3 3"></path>
            </svg>
          </div>
        </th>
        <th className="px-5 pb-2"></th>
      </tr>
    </thead>
    <tbody className="whitespace-nowrap border-t">
      {stories.map((story) => {
        const splittedTitle = story.title.split(" ");
        const title = splittedTitle.slice(0, 2).join(" ");
        const publishDate = splittedTitle.slice(2).join(" ");
        const statusBgColor = statuses.find(
          (status) => story.status === status.title
        )?.bgColor;
        const getImageElement = (image: Image) => (
          <img
            key={image.id}
            src={image.path}
            className="rounded-[3px] w-[29px] min-w-[29px] h-[52px]"
          />
        );
        const getImagesList = () => {
          if (window.innerWidth < 1024 && story.images.length <= 5) {
            {
              story.images.slice(0, 4)?.map((image) => getImageElement(image));
            }
          }

          return story.images
            .slice(0, 6)
            .map((image) => getImageElement(image));
        };

        const getImagesLeft = () => {
          if (story.images.length > 5 && window.innerWidth < 1024) {
            return (
              <div className="rounded-[3px] w-[29px] min-w-[29px] h-[52px] flex items-center justify-center bg-[#EBEBEB] text-sm text-[#444647]">
                +{story.images.length - 4}
              </div>
            );
          }

          if (story.images.length > 6 && window.innerWidth >= 1024) {
            return (
              <div className="rounded-[3px] w-[29px] min-w-[29px] h-[52px] flex items-center justify-center bg-[#EBEBEB] text-sm text-[#444647]">
                +{story.images.length - 6}
              </div>
            );
          }
        };

        return (
          <tr key={story.id} className="odd:bg-white text-sm text-[#171A25BF]">
            <td className="text-base py-4 px-5">
              <h4 className="text-[#1C62EB]">{title}</h4>
              <span className="text-[#A3A3A3]">{publishDate}</span>
            </td>
            <td className="flex space-x-[5px] py-4 px-5">
              {getImagesList()}
              {getImagesLeft()}
            </td>
            <td className="py-4 px-5">{story.lastModified}</td>
            <td className="py-4 px-5">
              <div
                className={`${statusBgColor} rounded-[2.5px] text-white font-bold text-[11px] px-1.5 text-center w-fit mx-auto lg:mx-0`}
              >
                {story.status}
              </div>
            </td>
            <td className="py-4 px-5">{story.liveFrom || "—"}</td>
            <td className="py-4 px-5">{story.ends || "—"}</td>
            <td className="pr-5">
              <button
                className="rounded-[3px] border py-[5px] px-4 border-[#D24747] group hover:bg-[#D24747] transition-colors mr-5"
                onClick={() => handleDeleteStory(story.id)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-[#D24747] group-hover:text-white transition-colors"
                />
              </button>
              <button className="btn">
                <FontAwesomeIcon icon={faPencil} className="mr-1" />
                Edit
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
