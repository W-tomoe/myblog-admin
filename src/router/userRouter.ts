import { RouterConfig } from '../config/ts-types'
import App from '../App'

const userRoutes:Array<RouterConfig> = [
    { path: '/',name: 'home', component: App}
]

export default userRoutes