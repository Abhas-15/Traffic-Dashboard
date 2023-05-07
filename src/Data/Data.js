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
// import img1 from "../imgs/img1.png";
// import img2 from "../imgs/img2.png";
// import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Traffic Issues",
  },
  {
    icon: UilClipboardAlt,
    heading: "Week's Slowest Roads",
  },
  // {
  //   icon: UilUsersAlt,
  //   heading: "Customers",
  // },
  // {
  //   icon: UilPackage,
  //   heading: "Products",
  // },
  // {
  //   icon: UilChart,
  //   heading: "Congestion Statistics",
  // },
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
    title: "Congestion Frequency",
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
        data: [10, 40, 30, 20, 35, 10, 25],
      },
    ],
  },
  {
    title: "Average Vehicular Speed",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 80,
    value: "18kpmh",
    unit:"PCU",
    png: UilChart,
    series: [
      {
        name: "Deaths",
        data: [6, 18, 13, 12, 14, 8, 9],
      },
    ],
  },
];


