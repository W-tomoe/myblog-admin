import { MenuItem,SubMenuItem } from '../config/ts-types'

const navList:Array<MenuItem<SubMenuItem>> = [
  {
    icon: "home",
    title: "浏览统计",
    link: "/"
  },
  {
    icon: "book",
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
    icon: "tags",
    title: "分类管理",
    link: "/classfiy",
    children: [
        {
            link: "/classifyList",
            title: "分类列表",
            parent: '/classfiy'
        },
        {
            link: "/createClassify",
            title: "新建分类",
            parent: '/classfiy'
        },
    ]
  },
  {
    icon: "edit",
    title: "作者管理",
    link: "/authors"
  },
  {
    icon: "bell",
    title: "消息通知",
    link: "/comments"
  },
  {
    icon: "setting",
    title: "系统设置",
    link: "/setting"
  }
];

export default navList;
