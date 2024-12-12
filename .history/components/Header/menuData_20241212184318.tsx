import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Photo gallery",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Docs",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "About the event",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Photo gallery",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Venue",
        newTab: false,
        path: "/about",
      },
      {
        id: 35,
        title: "Previous event",
        newTab: false,
        path: "/blog",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
