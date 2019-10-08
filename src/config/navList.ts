import { MenuItem,SubMenuItem } from '../config/ts-types'

const navList:Array<MenuItem<SubMenuItem>> = [
  {
    icon: "home",
    title: "文章管理",
    link: '/actical',
    children: [
        {
            link: "/list",
            title: "文章列表",
            parent: '/actical'
        },
        {
            link: "/createArticle",
            title: "新建文章",
            parent: '/comments'
        }
    ]
  },
  {
    icon: "edit",
    title: "作者管理",
    link: "/authors"
  },
  {
    icon: "folder",
    title: "留言板",
    link: "/comments"
  },
  {
    icon: "user",
    title: "系统设置",
    link: "/setting",
    children: [
        {
            title: "账号管理",
            link: "/userManage",
            parent: '/setting'
        }
    ]
  }
];

export default navList;
