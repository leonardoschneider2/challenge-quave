import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '../ui/App';
import { Provider } from './context/Provider';

Meteor.startup(() => {
  // I've change to insert in App ContextAPI from React
  render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
