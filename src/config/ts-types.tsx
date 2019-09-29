export interface RouterConfig  {
    path: string,
    component: any,
    name?: string,
    childRoutes?: any
}


export interface NavConf  {
    icon: string,
    title: string,
    link: string,
    subs?: any
}