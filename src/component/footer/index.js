import React from 'react';
import "./index.css"
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tabList:[{
                index:1,
                title:'首页'
            },{
                index:2,
                title:'分类'
            },{
                index:3,
                title:'我的'
            }]
        }
        this.tabBtn = this.tabBtn.bind(this)
    }
    tabBtn(){
        
    }
    render(){
        let listArr = [];
    for(let i = 0;i<this.state.tabList.length;i++){
      let item =(
        <li onClick={this.tabBtn}>
          <h3>{this.state.tabList[i].title}</h3>
        </li>
      )
      listArr.push(item)
    }
            return(
                <div class="footer">
                    {listArr}
                </div>
            )

        
    }
}
export default Footer;