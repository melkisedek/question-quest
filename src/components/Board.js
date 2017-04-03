import React from 'react';
import './Board.css';

class Board extends React.Component {
  render(){
    return(
      <main>
        <ul>
          <li><span>Start</span></li>
          <li><span>1</span></li>
          <li><span>2</span></li>
          <li><span>3</span></li>
          <li><span>4</span></li>
          <li><span>5</span></li>
          <li><span>6</span></li>
          <li><span>7</span></li>
          <li><span>8</span></li>
          <li><span>9</span></li>
          <li><span>10</span></li>
          <li><span>11</span></li>
          <li><span>12</span></li>
          <li><span>13</span></li>
          <li><span>14</span></li>
          <li><span>end</span></li>
        </ul>
        {/* 
        <div class="note">
          Use <a href="http://gridbyexample.com/browsers/">a browser that supports</a> CSS Grid.
         </div> 
        */}
        </main>
      );
  }
}

export default Board;