import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="header">
            <h2>Hello, and welcome... {this.props.name}</h2>
        </div>
    );
  }
}

export default Header;