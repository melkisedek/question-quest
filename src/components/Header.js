import React from 'react';
import './Header.css';

class Dot extends React.Component {
  render(){
    return (
      <div className="Dot"></div>
    );
  }
}

class Dice extends React.Component {
  render() {
    return (
      <div className="Dice">
        <Dot />
        <Dot />
        <Dot />
      </div>
    );
  }
}


class Score extends React.Component {
  render(){
    return(
        <h1>Score</h1>
      );
  }
}

class Header extends React.Component {
  render(){
    return(
      <div>
        <h1>Header</h1>
        <Dice />
          <Score />
      </div>
      );
  }
}

export default Header;