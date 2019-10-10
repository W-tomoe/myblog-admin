import React from 'react';
import Pannel from '../components/Pannel'
import { Row, Col } from 'antd'

export interface HomeProps {
    
}
 
export interface HomeState {
    
}
 
class Home extends React.Component<HomeProps, HomeState> {
    state = { }

    
    render() { 
        return (
            <div className="m-20">
                <Row>
                    <Col span={8}>
                        
                    </Col>
                    <Col span={8}>
                    
                    </Col>
                    <Col span={8}>
                    
                    </Col>
                </Row>
                <Pannel title="今日访问" style={{'margin-top':'20px'}}/>
            </div>
        );
    }
}
 
export default Home;