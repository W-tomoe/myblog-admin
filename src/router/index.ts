import { Component } from "react";
import App from '../App'
import {RouterConfig} from '../config/ts-types'


const routes:Array<RouterConfig> = [
    { path: '/',name: 'home', component: App}
]

export default {
    routes
}