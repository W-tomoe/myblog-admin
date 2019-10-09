import React,{ Component }  from 'react';

 
class Logo extends Component{
    render() {
        return (
            <div className="f-l logo-wrapper">
                <img className="logo-img" src={require("../assets/images/logo.png")}/>
                <div><b>tomoe</b>admin</div>
            </div>
        );
    }
}

export default Logo;