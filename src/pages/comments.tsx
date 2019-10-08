import React from 'react';

export interface CommentsProps {
    
}
 
export interface CommentsState {
    
}
 
class Comments extends React.Component<CommentsProps, CommentsState> {
    state = { }
    render() { 
        return ( 
            <div className='content-main'>这是评论页面</div>
        );
    }
}
 
export default Comments;