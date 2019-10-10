import * as React from 'react'
import { Icon } from 'antd'
import CSSAnimate from '../CSSAnimate'
import './index.less'
import cx from 'classnames'

const noop = function():void {};

export interface PannelProps {
    title: string
    expend: boolean,
    content: any,
    width:  number | string,
    height: number | string,
    scroll: boolean,
    style: object
}
 
export interface PannelState{
    expend: boolean,
    animationName: string,
    refresh: number
}

class Pannel extends React.Component<PannelProps, PannelState> {
    static defaultProps = {
        expend: false,
        title: '标题',
        content:(<div>这是面板内容</div>),
        width: '100%',
        height: 200,
        scroll: false,
        onRefresh: () => {},
        style: {}
    };
    
    constructor(props:PannelProps) {
        super(props)
        this.state = { 
            expend: props.expend,
            animationName: 'fadeIn',
            refresh: 0
        }
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    // 刷新面板
    handleRefresh() {
        this.setState({
            refresh: this.state.refresh + 1,
            animationName: 'fadeIn'
        });
    }


    // 展开收起面板
    handleExpend(bool:boolean) {
        this.setState({
            expend: bool
        })
    }

    

    render() {
        const { expend, refresh, animationName } = this.state

        const {
            scroll,
            height,
            width,
            style
        } = this.props

        const styles = {
            ...style,
            width
        };

        const bodyStyles = {};

        const Header = (
            <div className="pannel-title">
                <span className="title">{this.props.title}</span>
                <span className='panel-header-controls'>
                    <Icon type='sync' onClick={this.handleRefresh}/>
                    <Icon type={expend?'minus':'plus'} onClick={this.handleExpend.bind(this,expend? false:true)}/>
                </span>
            </div>
        )

        return (
            <div className="pannel-wrapper" style={styles}>
                {Header}
                <div className='panel-body'>
                    {expend?'':this.props.content}
                </div>
            </div>
        );
    }
}
 
export default Pannel;