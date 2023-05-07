// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Traffic Issues",
    route: "/tweets",
    target: "_blank"
  },
  {
    icon: UilClipboardAlt,
    heading: "Week's Slowest Roads",
    route: "/tweets",
    target: "_blank"
  },
  // {
  //   icon: UilUsersAlt,
  //   heading: "Customers",
  // },
  // {
  //   icon: UilPackage,
  //   heading: "Products",
  // },
  {
    icon: UilChart,
    heading: "Accident Statistics",
    route: "/tweets",
    target: "_blank"
  },
  {
    icon: UilChart,
    heading: "tweets",
    route: "/tweets",
    target: "_blank"
  },
  {
    icon: UilChart,
    heading: "rules",
    route: "/rules",
    target: "_blank"
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Traffic Volume",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "1500PCU",
    unit:"PCU",
    png: UilChart,
    series: [
      {
        name: "Traffic",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Accident Frequency",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "150Nos",
    unit:"PCU",
    png: UilChart,
    series: [
      {
        name: "Accidents",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Water Logging",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 20,
    value: "20Cm",
    unit:"PCU",
    png: UilChart,
    series: [
      {
        name: "Deaths",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
