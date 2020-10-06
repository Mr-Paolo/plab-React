import React from 'react';
import Instructions from './Instructions';

class Header extends React.Component{
  state = {showInstruction: false}
  render() {
    return (
      <div>
        { this.state.showInstruction ? <Instructions /> : ''}
        <div className="ui secondary pointing menu">
          <a href="/" className="item">
            Streamy
          </a>
          <div className="right menu">
            <span className="item" href="/" onClick={() => this.setState({showInstruction: !this.state.showInstruction})}>Mostra/nascondi istruzioni</span>
            <a href="/" className="item">
              Streams
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
