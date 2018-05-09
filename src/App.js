import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title/Title';

class App extends Component {

  state = { version: '1.0'}

  onClickHandler = () => {
    let nextVersion = parseInt(this.state.version, 10) + 1
    this.setState({ version: nextVersion.toFixed(1)})
  }

  render() {


    if(parseInt(this.state.version, 10) > 1){
      console.log('アップグレード成功じゃい！！ 新しいバージョンは　' + this.state.version);
    }

    let upgradeButton = (
      <p
        onClick={this.onClickHandler}
        id="upgradeButton"
        className="upgrade-button"
      >Upgrade</p>
    );

    if( this.state.version === '5.0'){
      upgradeButton = (
        <p
          onClick={this.onClickHandler}
          id="upgradeButton"
          className="upgraded-button"
        >Already up-to-date</p>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            titleStyle={{color: 'orange'}}
          >
            Hello World
              <span id="versionCounter" style={{borderBottom: '1px solid orange'}}>
                {this.state.version}
              </span>
          </Title>
          {upgradeButton}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
