import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import SampleComponent from './components/SampleComponent'

function App(){
    return (
      <BrowserRouter>
        <div className="App">
          <Link to = {'/SampleComponent'}>SampleComponent</Link>
          <Switch>
            <Route path='/sampleComponent' component={SampleComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
