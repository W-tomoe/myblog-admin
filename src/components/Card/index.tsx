import * as React from 'react';
import './index.less'

export interface CardProps {
    align: string,
    title: string
}
 
export interface CardState {
    
}
 
class Card extends React.Component<CardProps, CardState> {
    static defaulProps = {
        align: 'center',
        title: '标题'
    }
    state = {  }
    render() { 
        return (
            <div className="card-wrapper">
            
            </div>
        );
    }
}
 
export default Card;