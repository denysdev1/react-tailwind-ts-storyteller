import { Status } from "./types/Status";
import { Story } from "./types/Story";
import { Tab } from "./types/Tab";

export const statuses: Status[] = [
  {
    title: "Draft",
    bgColor: "bg-[#1C62EB]",
  },
  {
    title: "Scheduled",
    bgColor: "bg-[#1C62EB]",
  },
  {
    title: "Live",
    bgColor: "bg-[#1DB56C]",
  },
  {
    title: "Past",
    bgColor: "bg-[#A3A3A3]",
  },
];

export const stories: Story[] = [
  {
    id: 1,
    title: "Daily Horoscope (No publish date set)",
    lastModified: "Mar 31, 8:56 PM",
    status: "Draft",
    images: [
      { id: 1, path: "images/1.jpg" },
      { id: 2, path: "images/2.jpg" },
      { id: 3, path: "images/3.jpg" },
      { id: 4, path: "images/4.jpg" },
      { id: 5, path: "images/5.jpg" },
    ],
  },
  {
    id: 2,
    title: "Daily Horoscope (August 28)",
    lastModified: "Mar 31, 8:41 PM",
    status: "Scheduled",
    liveFrom: "Aug 28, 11:15 AM",
    ends: "Jun 7, 2:45 PM",
    images: [
      { id: 1, path: "images/1.jpg" },
      { id: 2, path: "images/2.jpg" },
    ],
  },
  {
    id: 3,
    title: "Daily Horoscope (October 16)",
    lastModified: "Mar 3, 5:11 PM",
    status: "Live",
    liveFrom: "Oct 16, 1:20 PM",
    ends: "Jan 12, 3:45 PM",
    images: [
      { id: 1, path: "images/1.jpg" },
      { id: 2, path: "images/2.jpg" },
      { id: 3, path: "images/3.jpg" },
      { id: 4, path: "images/4.jpg" },
      { id: 5, path: "images/5.jpg" },
      { id: 6, path: "images/6.jpg" },
      { id: 7, path: "images/1.jpg" },
      { id: 8, path: "images/2.jpg" },
      { id: 9, path: "images/3.jpg" },
      { id: 10, path: "images/4.jpg" },
      { id: 11, path: "images/5.jpg" },
      { id: 12, path: "images/6.jpg" },
      { id: 13, path: "images/6.jpg" },
    ],
  },
  {
    id: 4,
    title: "Daily Horoscope (November 23)",
    lastModified: "Aug 17, 6:50 AM",
    status: "Scheduled",
    liveFrom: "Nov 23, 11:31 PM",
    ends: "Jan 19, 4:46 PM",
    images: [
      { id: 1, path: "images/1.jpg" },
      { id: 2, path: "images/2.jpg" },
      { id: 3, path: "images/3.jpg" },
    ],
  },
  {
    id: 5,
    title: "Weekly Wallpapers (June 2)",
    lastModified: "Jul 2, 9:59 AM",
    status: "Past",
    liveFrom: "Jun 2, 8:28 AM",
    ends: "Jul 30, 3:31 AM",
    images: [
      { id: 1, path: "images/1.jpg" },
      { id: 2, path: "images/2.jpg" },
      { id: 3, path: "images/3.jpg" },
      { id: 4, path: "images/4.jpg" },
      { id: 5, path: "images/5.jpg" },
      { id: 6, path: "images/6.jpg" },
    ],
  },
  {
    id: 6,
    title: "Weekly Wallpapers (May 19)",
    lastModified: "Apr 25, 3:04 PM",
    status: "Live",
    liveFrom: "May 19, 4:48 AM",
    ends: "Dec 14, 5:35 PM",
    images: [
      { id: 1, path: "images/1.jpg" },
      { id: 2, path: "images/2.jpg" },
      { id: 3, path: "images/3.jpg" },
      { id: 4, path: "images/4.jpg" },
      { id: 5, path: "images/5.jpg" },
      { id: 6, path: "images/6.jpg" },
      { id: 7, path: "images/1.jpg" },
      { id: 8, path: "images/2.jpg" },
      { id: 9, path: "images/3.jpg" },
      { id: 10, path: "images/4.jpg" },
      { id: 11, path: "images/5.jpg" },
      { id: 12, path: "images/6.jpg" },
      { id: 13, path: "images/6.jpg" },
    ],
  },
  {
    id: 7,
    title: "Weekly Wallpapers (June 2)",
    lastModified: "Jul 2, 9:59 AM",
    status: "Past",
    liveFrom: "Jul 30, 3:31 AM",
    ends: "Jan 12, 3:45 PM",
    images: [
      { id: 1, path: "images/1.jpg" },
      { id: 2, path: "images/2.jpg" },
      { id: 3, path: "images/3.jpg" },
      { id: 4, path: "images/4.jpg" },
      { id: 5, path: "images/5.jpg" },
      { id: 6, path: "images/6.jpg" },
    ],
  },
];

export const tabs: Tab[] = [
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