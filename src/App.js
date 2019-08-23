import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, SearchPage,ViewPage } from './Pages';
const App=()=> { 
    return (
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/view' component={ViewPage} />
        <Route path='/search' component={SearchPage} />
      </Switch>
    );
};
 
export default App;
