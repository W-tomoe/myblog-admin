import React from 'react';

export interface SettingProps {
    
}
 
export interface SettingState {
    
}
 
class Setting extends React.Component<SettingProps, SettingState> {
    state = { }
    render() { 
        return ( 
            <div className='content-main'>这是设置页面</div>
        );
    }
}
 
export default Setting;