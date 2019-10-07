export interface RouterConfig  {
    path: string,
    component: any,
    name?: string,
    childRoutes?: any
}


export interface MenuItem<T>  {
    icon: string,
    title: string,
    link: string,
    children?: Array<T>
}

export interface SubMenuItem {
    title: string,
    link: string
}