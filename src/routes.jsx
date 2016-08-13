import React from 'react';
import {Route} from 'react-router';
import {HomeContainer} from './components/Home';
import AddIdea from './components/AddIdea';
import Idea from './components/Idea';
import App from './components/App';

export default <Route component={App}>
  <Route path="/idea/:id" component={Idea}/>
  <Route path="/idea" component={AddIdea}/>
  <Route path="/" component={HomeContainer}/>
</Route>
