import {
  HomeIcon,
  DocumentCheckIcon,
  ArchiveBoxIcon,
  AdjustmentsVerticalIcon,
  BoltIcon,
  ChartPieIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";

export const MAX_LIST_ITEMS_TO_SHOW = 4;
export const listOne = [
  { title: "Home", icon: <HomeIcon className="sidebar-icons" /> },
  { title: "Shorts", icon: <DocumentCheckIcon className="sidebar-icons" /> },
  { title: "Subscription", icon: <ArchiveBoxIcon className="sidebar-icons" /> },
  {
    title: "YT Music",
    icon: <AdjustmentsVerticalIcon className="sidebar-icons" />,
  },
];
export const listTwo = [
  { title: "Library", icon: <HomeIcon className="sidebar-icons" /> },
  { title: "History", icon: <DocumentCheckIcon className="sidebar-icons" /> },
  { title: "Your Videos", icon: <ArchiveBoxIcon className="sidebar-icons" /> },
  {
    title: "Watch Later",
    icon: <AdjustmentsVerticalIcon className="sidebar-icons" />,
  },
  {
    title: "Downloads",
    icon: <DeviceTabletIcon className="sidebar-icons" />,
  },
  {
    title: "Rap",
    icon: <BoltIcon className="sidebar-icons" />,
  },
  {
    title: "Pop",
    icon: <ChartPieIcon className="sidebar-icons" />,
  },
];
export const buttonList = [
  "All",
  "PUBG",
  "UFC",
  "Football",
  "Wimbeldon",
  "Firstpost",
];

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_API_SINGLE_VIDEO =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics";

export const YOUTUBE_SEARCH_SUGGESTON_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
