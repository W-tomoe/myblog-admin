import React from 'react';

export interface AuthorProps {
    
}
 
export interface AuthorState {
    
}
 
class Author extends React.Component<AuthorProps, AuthorState> {
    state = { }
    render() { 
        return (
            <div className='content-main'>这是作者页面</div>
        );
    }
}
 
export default Author;