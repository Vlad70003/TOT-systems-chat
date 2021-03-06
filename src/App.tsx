import React from 'react';
import './App.css';
import { ConnectAuthSection } from './chat/components/AuthSection';
import { ConnectChatSection } from './chat/components/ChatSection';
import { connect } from 'react-redux';


function App(props: any) {
  return (
    <div className="App">
      {!props.isLoggedIn && < ConnectAuthSection /> }
      {props.isLoggedIn && < ConnectChatSection />}
    </div>
  );
}

export const ConnectApp = connect(
  (state: {isLoggedIn: any}) => ({isLoggedIn: state.isLoggedIn}),
  null
)(App);

