import React from 'react';
import './DummyApp.css';

class DummyApp extends React.Component {
    constructor() {
      super();

      this.state = {
          currentStep: 0,
          stepsTexts: ['Answer questions', 'Review your plan', 'Register']
      }
    }
  
    _nextStep (factor) {
        let state = this.state,
            currentStep = state.currentStep + factor;

        if (currentStep > state.stepsTexts.length - 1 || currentStep === -1) {
          return false
        }

        this.setState({currentStep});
    }
  
    render () {
        let state = this.state;

        return (
          <div className="pb">
            <header className="pb__header">
              <h1>React Progress Bar</h1>
            </header>      
            <main className="pb__main">
              <ProgressBar
                currentStep={state.currentStep}
                stepsTexts={state.stepsTexts}/>
            </main>
            <footer className="pb__footer">
              <button onClick={this._nextStep.bind(this, -1)}>PREV</button>
              <button onClick={this._nextStep.bind(this, 1)}>NEXT</button>
            </footer>
          </div>
      );
    }
}

class ProgressBar extends React.Component {

    shouldComponentUpdate (nextProps, nextState) {
        return this.props.currentStep !== nextProps.currentStep;
    }
  
    render() {
        let props = this.props,
            output = {steps: [], dots: []},
            currentStatus = false;
        
        
        props.stepsTexts.forEach((step, index) => {
          let scn = 'pb__info',
              dcn = 'pb__dot';
          
          if (currentStatus) {
            scn += ' pb__info--upcoming';
            dcn += ' pb__dot--upcoming';
          }
          
          if (index === props.currentStep) {
            scn += ' pb__info--current';
            dcn += ' pb__dot--current';
            currentStatus = true;
          }
          
          output.steps.push(
            <div className={scn} key={step}>{step}</div>
          );
          
          output.dots.push(
            <div className={dcn} key={step + 'dot'}/>
          );
        })

        return (
          <div className="pb__container">
            {output.steps}
            <div className={['pb__progress', 'pb__progress--' + props.currentStep].join(' ')}>
              <div className="pb__bar">
                {output.dots}
              </div>
            </div>        
          </div>
        );
    }
};

export default DummyApp;