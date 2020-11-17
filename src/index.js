import React from 'react';
// import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./component/header"
import Footer from "./component/footer"
import "./index.css"
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      status:props.info
    };
    console.log(props,"props",this.state)
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <button className="square" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}{this.state.status? 'ON' : 'OFF'}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type:false
    }
    this.setBtn = this.setBtn.bind(this)
  }    
  setBtn(){
    this.setState(state => ({
      type: !state.type
    }));

  }
  renderSquare(i) {
    return <Square onClick={this.setBtn} info={this.state.type}/>;
  }
  changeBtn(){

  }

  render() {
    const status = 'Next player: X';

    return (
      
      <div>
        
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      
      <div className="game">
        <Header title="首页"/>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <Footer/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
