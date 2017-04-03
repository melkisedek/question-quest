import React from 'react';
import './Game.css';
import Board from './Board';
import Header from './Header';
import DummyApp from './DummyApp';

class Question extends React.Component {
  render(props) {
    return (
      <div>{this.props.question}</div>
    );
  }
}

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      started: false,
      pnext: true,
      die: null,
      questions : [
      {"question" :"Is 1 an even number?", "answer": false}, 
      {"question" :"Is 2 an even number?", "answer": true},
      {"question" :"Is 3 an even number?", "answer": false}]
    };
  }

  initMove(position){
    this.setState(
    {
      started: true, 
      pnext: false
    }, 
    this.moveForward(position));
  }

  initMoveComputer(position){
    this.setState({
      started: true, 
      pnext: true
    });

    if (!this.state.started && !this.state.pnext) {
      if(this.state.die === 6){
        this.initMove(this.state.die);

      }
    } else {

    }
  }

  moveForward(position){

  }

  removePosition(){

  }

  handleClick() {
    this.setState({
      die: Math.floor(Math.random() * 6) + 1
    });

    if (!this.state.started && this.state.pnext) {
      if(this.state.die === 6){
        this.initMove(this.state.die);
        setTimeout(this.initMoveComputer(), 500);
      }
    } else {

    }
  }

  render() {
    const quiz = this.state.questions[Math.floor(Math.random() * this.state.questions.length)];
    return (
      <div className="Game">
        <button className="btn-roll" onClick={this.handleClick.bind(this)}>Roll Dice</button>
        <Header />
        <Question question={quiz.question}/>
        <Board />
        <DummyApp />
      </div>
    );
  }
}

export default Game;
