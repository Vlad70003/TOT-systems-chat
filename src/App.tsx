import React from 'react';
import './App.css';
import { ConnectAuthSection } from './chat/components/AuthSection';
import { connect } from 'react-redux';
import { isPropertySignature } from 'typescript';

function App(props: any) {
  return (
    <div className="App">
      {!props.isLoggedIn && < ConnectAuthSection /> }
      
    </div>
  );
}

export const ConnectApp = connect(
  (state: {isLoggedIn: any}) => ({isLoggedIn: state.isLoggedIn}),
  null
)(App);

