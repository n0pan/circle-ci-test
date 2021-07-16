import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <h2>This is a test!</h2>
    <Hello/>
    <Info/>
  </div>
);
