import React from 'react';
import ReactDOM from 'react-dom';
import Instructions from './instructions'
// import Esercizio from './esercizio1'


const App = () => {

  return <div>
      <Instructions />
      Hi there!
    </div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
