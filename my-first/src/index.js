import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


const App = () => {
  const ctaString = "Click me"
  const style= { 'backgroundColor': 'green'}
  return (
    <div>
      <label htmlFor="name" style={ style } >Name</label>
      <input type="text" id="name" />
      <button className="bg-red">{ ctaString }</button>
    </div>
  ) 
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
