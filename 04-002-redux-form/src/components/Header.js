import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import Instructions from './Instructions';

class Header extends React.Component{
  state = {showInstruction: false}
  render() {
    return (
      <div>
        { this.state.showInstruction ? <Instructions /> : ''}
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            Streamy
          </Link>
          <div className="right menu">
            <span className="item" onClick={() => this.setState({showInstruction: !this.state.showInstruction})}>Mostra/nascondi istruzioni</span>
            <Link to="/" className="item">
              Streams
            </Link>
            <GoogleAuth />
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
