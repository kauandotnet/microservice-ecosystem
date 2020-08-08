import React, { Component } from 'react';
import { SocketClient }     from '../../connection/socketClient';
import Login                from './Login';
import Register             from './Register';

export interface AccountState {
  login: boolean
  register: boolean
}

export class Account extends Component<any, AccountState> {

  constructor(props) {
    super(props);
    this.state = {
      login   : false,
      register: false,
    };
  }

  componentDidMount(): void {
    SocketClient.socket.on('connect', () => {
      this.setState({
        login   : true,
        register: false,
      });
    });
    SocketClient.socket.on('logged-in', () => {
      this.setState({
        login   : false,
        register: false,
      });
    });
    SocketClient.socket.on('logged-out', () => {
      this.setState({
        login   : true,
        register: false,
      });
    });
    SocketClient.socket.on('disconnect', () => {
      this.setState({
        login   : false,
        register: false,
      });
    });
  }

  componentWillUnmount(): void {
  }

  onRegister = () => this.setState({ login: false, register: true });
  onLogin    = () => this.setState({ login: true, register: false });

  render() {
    return (<>
      {this.state.login ? <Login onRegister={this.onRegister}/> : ''}
      {this.state.register ? <Register onLogin={this.onLogin}/> : ''}
    </>);
  }
}
