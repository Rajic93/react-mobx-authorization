
import React from 'react';

import { Provider as MobxProvider } from 'mobx-react';
import {
  BrowserRouter,
} from 'react-router-dom'

import stores from './stores';
import Routes from './routes';

import Navigation from './components/Navigation';

const App = () => (
  <MobxProvider {...stores}>
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  </MobxProvider>
);

export default App;
