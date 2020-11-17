import React from 'react';
import "./index.css"
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:props.title
        }
    }
    render(){
        return(
            <div className="header_top">{this.state.title}</div>
        )
    }
}
export default Header;