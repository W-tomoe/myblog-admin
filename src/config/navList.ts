import { NavConf } from "./ts-types";

const navList: Array<NavConf> = [
  {
    icon: "home",
    title: "文章列表",
    link: "/"
  },
  {
    icon: "edit",
    title: "作者管理",
    link: "/authors"
  },
  {
    icon: "folder",
    title: "评论管理",
    link: "/comments"
  },
  {
    icon: "user",
    title: "系统设置",
    link: "/setting"
  }
];

export default navList;
